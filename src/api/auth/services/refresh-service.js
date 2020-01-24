require('dotenv').config();
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');

const connection = require('../../../database/mongoose-service');
const userSchema = require('../../../database/user-schema');

const User = connection.model('User', userSchema);

async function refreshService({ refreshToken }) {
  const secret = process.env.JWT_SECRET;

  return {
    token: jwt.sign({ id: user.id }, secret, { expiresIn: '5m' }),
    refreshToken: uuid(),
  };
}

module.exports = refreshService;
