const { db } = require("../config/db")

let movies = [
    { id: 1, title: "Spider-Man", year: 2002 },
    { id: 2, title: "John Wick", year: 2014 },
    { id: 3, title: "The Avengers", year: 2012 },
    { id: 4, title: "Anoman", year: 2017 },
    { id: 5, title: "Insidious", year: 2017 },
    { id: 6, title: "Inception", year: 2017 },
]

const getMovie = (req, res) => {
    const query = 'SELECT * FROM movies '
    const data = db.query(query, (err, result) => {
        if (err) throw err
        console.log(result);

        res.status(200).json(result)
    })

}

const getMovieById = (req, res) => {
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)

    res.status(200).json(movie)
}

const insertNew = (req, res) => {
    console.log(req.body.year);
    let { title, year } = req.body

    const query = `INSERT INTO movies VALUES ( ' ',${title},${year},now(),now())`
    const data = db.query(query, (err, result) => {
        if (err) throw err
        console.log(result);

        res.status(200).json(result)
    })

    // const movie = movies.find(movie => movie.id == id)

    res.status(200).json(movie)
}

module.exports = { getMovie, getMovieById, insertNew }