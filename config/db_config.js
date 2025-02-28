const mysql = require('mysql2')
const dotenv = require('dotenv').config()
const db_connection = mysql.createConnection({
    host:process.env.HOST,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD
})

module.exports = db_connection.promise()