module.exports = {
  createUIDForTransaction(transaction) {
    return [
      transaction.amount,
      transaction.description,
      transaction.date,
    ].join('$');
  },
};
