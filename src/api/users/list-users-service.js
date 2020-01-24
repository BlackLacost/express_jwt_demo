const connection = require('../../database/mongoose-service');
const userSchema = require('../../database/user-schema');

const User = connection.model('User', userSchema);

async function listUserService() {
  const users = await User.find({});
  return {
    users,
  };
}

module.exports = listUserService;
