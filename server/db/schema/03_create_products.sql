DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  store_id integer REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  price INTEGER,
  quantity INTEGER
);