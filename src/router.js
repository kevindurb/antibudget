const { Router } = require('express');

const router = Router();

router.use(require('./users/routes'));
router.use(require('./accounts/routes'));
router.use(require('./transactions/routes'));
router.use(require('./categories/routes'));
router.use(require('./status/routes'));
router.use(require('./locale/routes'));

module.exports = router;
