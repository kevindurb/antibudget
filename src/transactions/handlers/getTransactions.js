const transactionsGateway = require('../gateway');

module.exports = (req, res) => {
  return transactionsGateway.getTransactions();
};
