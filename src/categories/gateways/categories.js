const R = require('ramda');
const db = require('../../db');

module.exports = {
  getCategories(userId) {
    return db.select(
      'categories.*',
    ).sum({
      balance: 'transactions.amount'
    }).from('categories')
      .leftJoin('transactions', 'transactions.categoryId', 'categories.id')
      .where({
        'categories.userId': userId,
      })
      .groupBy('categories.id')
      .then(R.map(
        R.evolve({
          balance: R.compose(
            R.defaultTo(0),
            parseInt,
          ),
        }),
      ));
  }
};
