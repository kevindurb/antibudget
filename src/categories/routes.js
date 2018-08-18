const { Router } = require('express');
const promisify = require('../utils/promisify');
const rest = require('../utils/rest');
const getCategories = require('./handlers/getCategories');

const router = Router();

router.post(
  '/users/:userId/categories',
  promisify(rest.create('categories', 'users', 'userId')),
);

router.get(
  '/users/:userId/categories',
  promisify(getCategories),
);

router.get(
  '/categories/:id',
  promisify(rest.read('categories')),
);

module.exports = router;
