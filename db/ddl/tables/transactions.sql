CREATE TABLE transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
  , amount INTEGER NOT NULL
  , description CITEXT NOT NULL
  , category_id UUID DEFAULT NULL REFERENCES categories(id)
  , account_id UUID NOT NULL REFERENCES accounts(id)
  , original_data JSON DEFAULT NULL
  , date TIMESTAMP WITH TIME ZONE NOT NULL

  , modified_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
  , created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()

  , CONSTRAINT transactions_amount_description_date_unq UNIQUE (amount, description, date)
);
