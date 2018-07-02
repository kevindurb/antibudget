module.exports = async (req, res) => {
  const acceptLanguage = req.headers['accept-language'];
  return acceptLanguage.split(',')[0] || 'en-US';
};

