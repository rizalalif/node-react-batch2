const mysql = require('mysql2')

const { HOST, USER, PASSWORD, DATABASE } = process.env
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_universitas",
    port: 3306
})



db.connect((err) => {
    if (err) throw err
});


module.exports = { db }