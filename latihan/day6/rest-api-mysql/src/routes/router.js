const express = require('express')
const { getMovie, addMovie, getMovieById, updateMovie, deleteMovie, getMovieByCategory } = require('../controller/moviesController')
const { basicAuth } = require('../middleware/basicAuth')
const { login, register } = require('../controller/authController')
const { authJWT } = require('../middleware/jwtAuth')

const route = express.Router()

route.get('/movie', getMovie)
route.post('/movie', authJWT, addMovie)
route.get('/movie/:id', getMovieById)
route.put('/movie/:id', basicAuth, updateMovie)
route.delete('/movie/:id', deleteMovie)

route.get('/category/:id', getMovieByCategory)


route.post('/register', register)
route.post('/login', login)

module.exports = { route }