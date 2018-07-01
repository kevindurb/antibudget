const buildErrorClass = (errorName) =>
  class extends Error {
    constructor(...args) {
      super(...args);
      this.name = errorName;
    }
  };


module.exports = {
  BadRequest: buildErrorClass('BadRequest'),
  NotFound: buildErrorClass('NotFound'),
};
