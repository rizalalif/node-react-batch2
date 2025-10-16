const express = require('express')
const { getMovie, addMovie, getMovieById, updateMovie, deleteMovie } = require('../controller/moviesController')
const { basicAuth } = require('../middleware/basicAuth')

const route = express.Router()

route.get('/movie', getMovie)
route.post('/movie', basicAuth, addMovie)
route.get('/movie/:id', getMovieById)
route.put('/movie/:id',basicAuth, updateMovie)
route.delete('/movie/:id', deleteMovie)


module.exports = { route }