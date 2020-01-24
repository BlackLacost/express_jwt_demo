const connection = require('../../database/mongoose-service');
const userSchema = require('../../database/user-schema');
const tokenSchema = require('../../database/token-schema');

const User = connection.model('User', userSchema);
const Token = connection.model('Token', tokenSchema);

async function loginService({ login, password }) {
  const user = await User.authentication(login, password);
  const token = await Token.createToken(user.id, { expiresIn: '5m' });
  return token;
}

module.exports = loginService;
