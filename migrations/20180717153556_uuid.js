exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS "citext";
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    DROP EXTENSION IF EXISTS "uuid-ossp";
    DROP EXTENSION IF EXISTS "citext";
  `);
};
