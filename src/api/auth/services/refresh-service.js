require('dotenv').config();

const connection = require('../../../database/mongoose-service');
const tokenSchema = require('../../../database/token-schema');

const Token = connection.model('Token', tokenSchema);

async function refreshService({ refreshToken }) {
  const token = await Token.findOne({ refreshToken });
  if (!token) {
    const error = new Error('Not Found Refresh Token');
    error.status = 404;
    throw error;
  }

  const newAccessToken = await Token.genAccessToken(token.userId, { expiresIn: '5m' });
  const newRefreshToken = await Token.genRefreshToken();

  await Token.create({ userId: token.userId, refreshToken: newRefreshToken });

  await Token.deleteOne({ refreshToken });

  return {
    token: newAccessToken,
    refreshToken: newRefreshToken,
  };
}

module.exports = refreshService;
