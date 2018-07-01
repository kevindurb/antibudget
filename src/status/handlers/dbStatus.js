const statusGateway = require('../gateway');

module.exports = async (req, res) => {
  await statusGateway.status();

  return {
    status: 'OK',
  };
};
