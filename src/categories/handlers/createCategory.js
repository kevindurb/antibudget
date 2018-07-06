const categoriesGateway = require('../gateway');

module.exports = async (req, res) => {
  const category = req.body;

  return await categoriesGateway.createCategory(category);
};
