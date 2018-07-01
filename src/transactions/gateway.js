const db = require('../db');

module.exports = {
  createTransactions(transactions) {
    return db('transactions')
      .insert(transactions)
      .returning('*');
  },
  getTransactions() {
    return db.select()
      .from('transactions');
  }
};
