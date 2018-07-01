const db = require('../db');

module.exports = {
  status() {
    return db.raw('select now()');
  }
};
