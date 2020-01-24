require('dotenv').config();
const express = require('express');

const apiRouter = require('./api/api-router');

const app = express();
const apiRoot = process.env.API_ROOT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('API for JWT testing'));

app.use(`${apiRoot}`, apiRouter);

app.use((err, req, res, next) => {
  const error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  const jsonRes =
    req.app.get('env') === 'development'
      ? { error, message: err.message }
      : { message: '500 (Internal Server Error)' };
  res.json(jsonRes);
});

module.exports = app;
