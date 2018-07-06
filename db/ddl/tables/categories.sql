CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
  , name TEXT NOT NULL
  , order_by INTEGER NOT NULL DEFAULT 0
);

