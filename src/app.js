const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API for JWT testing'));

module.exports = app;
