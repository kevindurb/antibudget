CREATE TABLE transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  amount INTEGER NOT NULL,
  description CITEXT NOT NULL,
  category_id UUID DEFAULT NULL REFERENCES categories(id),
  original_data JSON DEFAULT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  CONSTRAINT transactions_amount_description_date_unq UNIQUE (amount, description, date)
);
