const knex = require('knex');

const { camelizeKeys, decamelize } = require('humps');

module.exports = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  postProcessResponse: (result) => {
    return camelizeKeys(result);
  },
  wrapIdentifier: (value, origImpl, queryContext) => origImpl(decamelize(value)),
});
