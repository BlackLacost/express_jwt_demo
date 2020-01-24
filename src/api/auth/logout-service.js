const tokenSchema = require('../../database/token-schema');
const connection = require('../../database/mongoose-service');

const Token = connection.model('Token', tokenSchema);

async function logoutService(user) {
  const userId = user.id;
  await Token.deleteMany({ userId });
  return {
    logout: true,
  };
}

module.exports = logoutService;
