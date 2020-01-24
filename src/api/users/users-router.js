require('dotenv').config();
const { Router } = require('express');
const jwtMiddleware = require('express-jwt');

const { getUsers, postUser } = require('./users-controllers');

const router = Router();
const secret = process.env.JWT_SECRET;

router.get('/', jwtMiddleware({ secret }), getUsers);
router.post('/', postUser);

module.exports = router;
