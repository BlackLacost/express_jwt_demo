require('dotenv').config();
const express = require('express');

const apiRouter = require('./api/api-router');

const app = express();
const apiRoot = process.env.API_ROOT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('API for JWT testing'));

app.use(`${apiRoot}`, apiRouter);

// TODO Create Error Handler

module.exports = app;
