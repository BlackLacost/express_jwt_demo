require('dotenv').config();
const { Router } = require('express');
const jwtMiddleware = require('express-jwt');

const makeController = require('../../make-controller');
const addUserService = require('./services/add-user-service');
const listUsersService = require('./services/list-users-service');

const router = Router();
const secret = process.env.JWT_SECRET;

router.get(
  '/',
  jwtMiddleware({ secret }),
  makeController(listUsersService, (req) => req),
);

router.post(
  '/',
  // jwtMiddleware({ secret }),
  makeController(addUserService, (req) => req.body),
);

module.exports = router;
