const { Router } = require('express');
const promisify = require('../utils/promisify');

const router = Router();

router.get(
  '/locale',
  promisify(require('./handlers/getLocale')),
);

module.exports = router;

