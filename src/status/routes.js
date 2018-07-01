const { Router } = require('express');
const promisify = require('../utils/promisify');

const router = Router();

router.get(
  '/status/db',
  promisify(require('./handlers/dbStatus')),
);

module.exports = router;
