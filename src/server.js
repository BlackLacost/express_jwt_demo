const http = require('http');
const debug = require('debug')('app:server');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);
server.listen(port, () => {
  debug(`Server listening on port: ${port}`);
});
