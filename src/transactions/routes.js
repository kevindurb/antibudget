const { Router } = require('express');
const promisify = require('../utils/promisify');

const router = Router();

router.post(
  '/transactions',
  promisify(require('./handlers/createTransactions')),
);

router.get(
  '/transactions',
  promisify(require('./handlers/getTransactions')),
);

module.exports = router;
