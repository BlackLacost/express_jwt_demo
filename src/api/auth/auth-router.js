const { Router } = require('express');

const { login, refresh } = require('./auth-controllers');

const router = Router();

router.post('/login', login);
router.post('/refresh', refresh);

module.exports = router;
