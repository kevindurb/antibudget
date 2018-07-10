const { Router } = require('express');
const promisify = require('../utils/promisify');
const rest = require('../utils/rest');

const router = Router();

router.post(
  '/accounts/:accountId/transactions',
  promisify(rest.create('transactions', 'accounts', 'accountId')),
);

router.get(
  '/accounts/:accountId/transactions',
  promisify(rest.read('transactions', 'accountId')),
);

router.get(
  '/transactions/:id',
  promisify(rest.read('transactions')),
);

router.put(
  '/transactions/:id',
  promisify(rest.update('transactions')),
);

module.exports = router;
