require('dotenv').config();
const express = require('express');

const apiRouter = require('./api/api-router');

const app = express();
const apiRoot = process.env.API_ROOT;

app.get('/', (req, res) => res.send('API for JWT testing'));

app.use(`${apiRoot}`, apiRouter);

module.exports = app;
