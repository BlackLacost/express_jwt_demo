require('dotenv').config();
const { Router } = require('express');
const jwtMiddleware = require('express-jwt');

const { login, refresh, logout } = require('./auth-controllers');

const router = Router();
const secret = process.env.JWT_SECRET;

router.post('/login', login);
router.get('/logout', jwtMiddleware({ secret }), logout);
router.post('/refresh', refresh);

module.exports = router;
