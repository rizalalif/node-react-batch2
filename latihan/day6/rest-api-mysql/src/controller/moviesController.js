const { PrismaClient } = require('./../generated/prisma')


const prisma = new PrismaClient()


async function getMovie(req, res) {
    try {
        const { page } = req.query
        let data = await prisma.movies.findMany()
        if (page) {
            data = await prisma.movies.findMany({
                skip: (page - 1) * 3,
                take: 3,
            })
        }

        console.log(data);

        // const data = await prisma.movies.findMany({
        //     skip: (page - 1) * 3,
        //     take: 3,
        // })
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
        const data = await prisma.movies.findFirstOrThrow({
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
        let { title, year } = req.body
        const addMovie = await prisma.movies.create({
            data: {
                title, year: parseInt(year)
            }
        })
        return res.status(200).json({
            status: 'OK',
            message: 'movie added!',
            data: addMovie
        })
    } catch (error) {
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
        const updatedMovie = await prisma.movies.update({
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

        await prisma.movies.delete({
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

module.exports = { getMovie, getMovieById, addMovie, updateMovie, deleteMovie }