const express = require('express')
const { getNilai, getNilaiById, addNilai, updateNilai, deleteNilai } = require('../controller/movieController')

const route = express.Router()

route.post('/nilai', addNilai)
route.get('/nilai', getNilai)
route.get('/nilai/:id', getNilaiById)
route.put('/nilai/:id', updateNilai)
route.delete('/nilai/:id', deleteNilai)

module.exports = { route }