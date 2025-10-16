const express = require('express')
const { getMovie, addMovie, getMovieById, updateMovie, deleteMovie } = require('../controller/moviesController')

const route = express.Router()

route.get('/movie', getMovie)
route.post('/movie', addMovie)
route.get('/movie/:id', getMovieById)
route.put('/movie/:id', updateMovie)
route.delete('/movie/:id', deleteMovie)


module.exports = { route }