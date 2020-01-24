require('dotenv').config();
const mongoose = require('mongoose');
const debug = require('debug')('app:mongo');

mongoose.Promise = global.Promise;
const connectionString = process.env.MONGO_CONNECTION_STRING;

const connection = mongoose.createConnection(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

connection
  .once('open', () => {
    debug(`mongodb connection created to ${connectionString}`);
  })
  .on('disconnected', () => {
    debug('mongodb disconnected');
  })
  .on('reconnect', () => {
    debug('mongodb reconnected');
  })
  .on('error', (error) => {
    debug(`Warning: ${error}`);
  });

function closeConnection(conn) {
  return () =>
    conn.close(() => {
      debug(`Mongoose connection :${connectionString} is disconnected through app termination`);
    });
}

process.on('SIGINT', closeConnection(connection));

module.exports = connection;
