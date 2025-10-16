const cors = require('cors')
const express = require('express');
const { route } = require('./src/routes/router');
require('dotenv').config()
const app = express()


app.use(cors({
    origin: process.env.CORS_ALLOW,
    optionSuccesSatatus: 200
}))
app.use(express.json())
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Welcume');

})

app.use('/api', route)


app.listen(port, () => {
    console.log('Listening on.. localhost:' + port);

})