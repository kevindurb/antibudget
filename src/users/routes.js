const { Router } = require('express');
const promisify = require('../utils/promisify');
const rest = require('../utils/rest');

const router = Router();

router.post(
  '/users',
  promisify(rest.create('users')),
);

router.get(
  '/users',
  promisify(rest.read('users')),
);

router.get(
  '/users/:id',
  promisify(rest.read('transactions')),
);

module.exports = router;
