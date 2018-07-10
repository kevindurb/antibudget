CREATE TABLE category_transfers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
  , amount INTEGER NOT NULL
  , category_id UUID DEFAULT NULL REFERENCES categories(id)

  , modified_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
  , created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
