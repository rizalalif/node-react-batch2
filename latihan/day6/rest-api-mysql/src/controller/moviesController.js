const { db } = require('../config/db')
const { PrismaClient } = require('./../generated/prisma')


const prisma = new PrismaClient()


async function getMovie(req, res) {
    try {
        const { page } = req.query
        let data = await prisma.movie.findMany({
            include: {
                category: {
                    select: { name: true }
                }
            }
        })
        if (page) {
            data = await prisma.movie.findMany({
                skip: (page - 1) * 3,
                take: 3,
            })
        }

        console.log(data);
        return res.status(200).json({
            status: "OK",
            data
        })
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: 'Not Found!',
        })
    }

}

async function getMovieById(req, res) {
    try {

        const { id } = req.params
        const data = await prisma.movie.findFirstOrThrow({
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            },
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({
            status: "OK",
            data
        })
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: 'Not Found!',
        })
    }

}

async function addMovie(req, res) {
    try {
        let { title, year, categoriesId } = req.body
        const addMovie = await prisma.movie.create({
            data: {
                title, year: parseInt(year), categoriesId
            }
        })
        return res.status(200).json({
            status: 'OK',
            message: 'movie added!',
            data: addMovie
        })
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            status: 'error',
            message: 'Bad Request',
        })
    }

}

async function updateMovie(req, res) {
    try {
        let updateField = req.body
        let { id } = req.params
        const updatedMovie = await prisma.movie.update({
            data: updateField,
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({
            status: 'OK',
            message: 'movie updated!',
            data: updatedMovie
        })
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: 'Bad Request',
        })
    }

}

async function deleteMovie(req, res) {
    try {

        const { id } = req.params

        await prisma.movie.delete({
            where: { id: Number(id) }
        })

        return res.status(200).json({
            status: 'OK',
            message: 'movie deleted succesfully!',
        })
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: 'Not Found',
        })

    }
}

async function getMovieByCategory(req, res) {
    try {
        const { id } = req.params
        const data = await prisma.category.findFirstOrThrow({
            where: {
                id: Number(id)
            },
            include: { movies: true }
        })
        return res.status(200).json({
            status: "OK",
            data
        })
    } catch (error) {
         return res.status(400).json({
            status: 'error',
            message: 'Not Found',
        })

    }

}

module.exports = { getMovie, getMovieById, addMovie, updateMovie, deleteMovie, getMovieByCategory }