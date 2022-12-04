require("dotenv").config({
    path: process.cwd() + '/.env'
})

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(`${process.env.MONGO_DB_STRING}`)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

require('./contactRoute')(app);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        success: false,
        error: {
            message: error.message
        }
    })
})

module.exports = app;