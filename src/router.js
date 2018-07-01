const { Router } = require('express');
const {
  errorHandler,
  routeNotFoundHandler,
  statusHandler,
} = require('./globalHandlers');

const transactionsRoutes = require('./transactions/routes');
const statusRoutes = require('./status/routes');

const router = Router();

router.get('/', statusHandler);

router.use(transactionsRoutes);
router.use(statusRoutes);

router.all('*', routeNotFoundHandler);
router.use(errorHandler);

module.exports = router;
