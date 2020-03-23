import express, { Application } from "express";
import entryPoint from "./app";
import mysql from "mysql";

const app: Application = express();
app.use(entryPoint);
app.use(express.json());

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'comunicacion3',
    database: 'chatbot',
    multipleStatementes: true,
    port: '3306'
});

connection.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connected to db")
});

const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});