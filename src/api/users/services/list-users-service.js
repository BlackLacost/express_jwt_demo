const connection = require('../../../database/mongoose-service');
const userSchema = require('../../../database/user-schema');

// const User = connection.model('User', userSchema);

async function listUserService() {
  return {
    users: [
      { id: '1', login: 'Ilya', password: 'pass' },
      { id: '2', login: 'Oleg', password: 'pass' },
    ],
  };
}

module.exports = listUserService;
