const { Router } = require('express');

const { getUsers } = require('./users-controllers');

const router = Router();

router.get('/', getUsers);

module.exports = router;
