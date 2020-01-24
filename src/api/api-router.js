const { Router } = require('express');

const usersRouter = require('./users/users-router');

const router = Router();

router.use('/users', usersRouter);

module.exports = router;
