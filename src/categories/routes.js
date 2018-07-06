const { Router } = require('express');
const promisify = require('../utils/promisify');

const router = Router();

router.post(
  '/categories',
  promisify(require('./handlers/createCategory')),
);

router.get(
  '/categories',
  promisify(require('./handlers/getCategories')),
);

module.exports = router;
