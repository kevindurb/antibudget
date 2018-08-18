const { Router } = require('express');
const promisify = require('../utils/promisify');
const rest = require('../utils/rest');
const getAccounts = require('./handlers/getAccounts');

const router = Router();

router.post(
  '/users/:userId/accounts',
  promisify(rest.create('accounts', 'users', 'userId')),
);

router.get(
  '/users/:userId/accounts',
  promisify(getAccounts),
);

router.get(
  '/accounts/:id',
  promisify(rest.read('accounts')),
);

module.exports = router;
