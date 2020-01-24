const listUserService = require('./services/list-users-service');

async function getUsers(req, res) {
  res.json(await listUserService());
}

module.exports = {
  getUsers,
};
