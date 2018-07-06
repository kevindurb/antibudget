const db = require('../db');

module.exports = {
  createCategory(category) {
    return db('categories')
      .insert(category)
      .returning('*')
      .then(x => x[0]);
  },
  getCategories() {
    return db.select()
      .from('categories')
      .orderBy('orderBy');
  }
};
