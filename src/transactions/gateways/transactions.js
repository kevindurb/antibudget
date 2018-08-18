const R = require('ramda');
const db = require('../../db');

module.exports = {
  getTransactions(userId) {
    return db.select(
      'transactions.*',
    ).from('transactions')
    .where({
      'transactions.userId': userId,
    })
    .orderBy('transactions.date', 'desc');
  }
};
