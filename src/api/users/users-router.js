const { Router } = require('express');

const { getUsers, postUser } = require('./users-controllers');

const router = Router();

router.get('/', getUsers);
router.post('/', postUser);

module.exports = router;
