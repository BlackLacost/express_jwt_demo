const listUserService = require('./services/list-users-service');
const addUserService = require('./services/add-user-service');

async function getUsers(req, res, next) {
  try {
    res.json(await listUserService());
  } catch (err) {
    next(err);
  }
}

async function postUser(req, res, next) {
  try {
    res.json(await addUserService(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
  postUser,
};
