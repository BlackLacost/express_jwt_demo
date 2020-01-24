const loginService = require('./services/login-service');

async function login(req, res, next) {
  try {
    res.json(await loginService(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
};
