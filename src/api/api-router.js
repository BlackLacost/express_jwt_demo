const { Router } = require('express');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
