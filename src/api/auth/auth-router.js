require('dotenv').config();
const { Router } = require('express');
const jwtMiddleware = require('express-jwt');

const loginService = require('./login-service');
const logoutService = require('./logout-service');
const refreshService = require('./refresh-service');
const makeController = require('../../make-controller');

const router = Router();
const secret = process.env.JWT_SECRET;

router.get(
  '/logout',
  jwtMiddleware({ secret }),
  makeController(logoutService, (req) => req.user),
);

router.post(
  '/refresh',
  makeController(refreshService, (req) => req.body),
);

router.post(
  '/login',
  makeController(loginService, (req) => req.body),
);

module.exports = router;
