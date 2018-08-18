const gateway = require('../gateways/transactions');

module.exports = async (req, res) => {
  const transactions = await gateway.getTransactions(req.params.userId);

  return transactions;
};
