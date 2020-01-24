const loginService = require('./services/login-service');
const refreshService = require('./services/refresh-service');

async function login(req, res, next) {
  try {
    res.json(await loginService(req.body));
  } catch (err) {
    next(err);
  }
}

async function refresh(req, res, next) {
  try {
    res.json(await refreshService(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
  refresh,
};
