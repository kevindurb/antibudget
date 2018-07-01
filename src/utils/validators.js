const errors = require('./errors');

export const validateIdParam = (paramName) => (req, res, next) => {
  const id = req.params[paramName];

  if (!id) {
    throw new errors.BadRequest('id not valid');
  }

  next();
};
