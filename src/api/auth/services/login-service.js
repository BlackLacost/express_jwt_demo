require('dotenv').config();
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');

const connection = require('../../../database/mongoose-service');
const userSchema = require('../../../database/user-schema');

const User = connection.model('User', userSchema);

async function loginService({ login, password }) {
  const user = await User.authentication(login, password);
  const secret = process.env.JWT_SECRET;

  return {
    token: jwt.sign({ id: user.id }, secret, { expiresIn: '15s' }),
    refreshToken: uuid(),
  };
}

module.exports = loginService;
