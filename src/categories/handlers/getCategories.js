const categoriesGateway = require('../gateway');

module.exports = (req, res) => {
  return categoriesGateway.getCategories();
};
