const promisify = (fn) =>
  (req, res, next) => {
    fn(req, res, next)
      .then((result) => {
        res.send(result);
        res.status(200);
        res.end();
      })
      .catch(next);
  };

module.exports = promisify;
