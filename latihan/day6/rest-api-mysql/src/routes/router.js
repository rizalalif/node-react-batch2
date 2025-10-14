const express = require('express')
const { getMovie, getMovieById, insertNew } = require('../controller/movieController')

const route = express.Router()

route.get('/movie', getMovie)
route.get('/movie/:id', getMovieById)
route.post('/movie', insertNew)


module.exports = { route }