// Connect to database
const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: process.env.MYSQL_PASSWORD,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;