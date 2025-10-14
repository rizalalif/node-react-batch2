const mysql = require('mysql2')

const { HOST, USER, PASSWORD, DATABASE } = process.env
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_movie",
    port: 3308
})



db.connect((err) => {
    if (err) throw err
});


module.exports = { db }