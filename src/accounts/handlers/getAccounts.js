const gateway = require('../gateways/accounts');

module.exports = async (req, res) => {
  const accounts = await gateway.getAccounts(req.params.userId);

  return accounts;
};
