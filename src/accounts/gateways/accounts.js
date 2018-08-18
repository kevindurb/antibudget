const R = require('ramda');
const db = require('../../db');

module.exports = {
  getAccounts(userId) {
    return db.select(
      'accounts.*',
    ).sum({
      balance: 'transactions.amount'
    }).from('accounts')
      .leftJoin('transactions', 'transactions.accountId', 'accounts.id')
      .where({
        'accounts.userId': userId,
      })
      .groupBy('accounts.id')
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
