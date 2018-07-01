const statusHandler = (req, res) => {
  res.send('OK');
};

const routeNotFoundHandler = (req, res) => {
  res.status(503);
  res.end();
};

const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'BadRequest':
      res.status(400);
      res.json({
        message: err.message,
      });
      res.end();
    case 'NotFound':
      res.status(404);
      res.json({
        message: err.message,
      });
      res.end();
    default:
      console.error(err);
      res.status(500);
      res.end();
  }
};

module.exports = {
  statusHandler,
  routeNotFoundHandler,
  errorHandler,
};
