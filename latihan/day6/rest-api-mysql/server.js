const express = require('express');
const { route } = require('./src/routes/router');

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcume');

})

app.use('/api', route)


app.listen(port, () => {
    console.log('Listening on.. localhost:' + port);

})