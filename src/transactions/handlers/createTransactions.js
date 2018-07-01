const transactionsGateway = require('../gateway');

module.exports = async (req, res) => {
  const transactions = req.body;

  return await transactionsGateway.createTransactions(transactions);
};
