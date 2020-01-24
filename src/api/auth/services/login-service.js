const connection = require('../../../database/mongoose-service');
const userSchema = require('../../../database/user-schema');
const tokenSchema = require('../../../database/token-schema');

const User = connection.model('User', userSchema);
const Token = connection.model('Token', tokenSchema);

async function loginService({ login, password }) {
  const user = await User.authentication(login, password);

  const accessToken = await Token.genAccessToken(user.id, { expiresIn: '5m' });
  const refreshToken = await Token.genRefreshToken();

  await Token.create({ userId: user.id, refreshToken });

  return {
    token: accessToken,
    refreshToken: refreshToken,
  };
}

module.exports = loginService;
