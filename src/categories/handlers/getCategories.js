const gateway = require('../gateways/categories');

module.exports = async (req, res) => {
  const categories = await gateway.getCategories(req.params.userId);

  return categories;
};
