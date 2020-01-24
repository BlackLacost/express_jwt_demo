require('dotenv').config();

const connection = require('../../database/mongoose-service');
const tokenSchema = require('../../database/token-schema');

const Token = connection.model('Token', tokenSchema);

async function refreshService({ refreshToken }) {
  const token = await Token.findOne({ refreshToken });
  if (!token) {
    const error = new Error('Not Found Refresh Token');
    error.status = 404;
    throw error;
  }
  const newToken = await Token.createToken(token.userId, { expiresIn: '5m' });
  await Token.deleteOne({ refreshToken });

  return newToken;
}

module.exports = refreshService;
