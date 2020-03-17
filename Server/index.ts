const express = require('express');
const mysql = require("mysql");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'comunicacion3',
    database: 'cinema',
    multipleStatementes: true,
    port: '3306'
});

connection.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connected to db")
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});