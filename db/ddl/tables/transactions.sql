CREATE TABLE transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  amount INTEGER NOT NULL,
  description TEXT NOT NULL,
  categoryId UUID DEFAULT NULL REFERENCES categories(id),
  date TIMESTAMP WITH TIME ZONE NOT NULL
);
