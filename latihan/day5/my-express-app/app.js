const express = require('express')
const app = express()
const port = 3000


let movies = [
    { id: 1, title: "Spider-Man", year: 2002 },
    { id: 2, title: "John Wick", year: 2014 },
    { id: 3, title: "The Avengers", year: 2012 },
    { id: 4, title: "Logan", year: 2017 },
]


const getMovie = (req, res) => {
    let result = '';
    movies.forEach((movie, i) => {
        result += `${movie.id} .${movie.title}<br> `
    })
    res.send(result)
}

app.get('/movie', getMovie)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movie', (req, res) => {
    res.send('ini adalah tampilan data movie!')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
