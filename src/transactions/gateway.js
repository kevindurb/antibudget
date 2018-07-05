const db = require('../db');

module.exports = {
  createTransactions(transactions) {
    const sql = db('transactions')
      .insert(transactions)
      .toString();
    return db.raw(`
      ${sql}
      ON CONFLICT DO NOTHING
      RETURNING *
    `).then(result => result.rows);
  },
  getTransactions() {
    return db.select()
      .from('transactions')
      .orderBy('date', 'desc');
  }
};
