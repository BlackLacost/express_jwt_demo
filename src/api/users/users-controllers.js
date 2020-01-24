const listUserService = require('./services/list-users-service');
const addUserService = require('./services/add-user-service');

async function getUsers(req, res) {
  res.json(await listUserService());
}

async function postUser(req, res) {
  res.json(await addUserService({ userInfo: req.body }));
}

module.exports = {
  getUsers,
  postUser,
};
