const connection = require('../../database/mongoose-service');
const userSchema = require('../../database/user-schema');

const User = connection.model('User', userSchema);

async function addUserService({ login, password }) {
  const user = await User.create({ login, password });
  return {
    user,
  };
}

module.exports = addUserService;
