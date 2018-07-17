exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE accounts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
      , user_id UUID DEFAULT NULL REFERENCES users(id)
      , description CITEXT NOT NULL
      , modified_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
      , created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    DROP TABLE accounts;
  `);
};
