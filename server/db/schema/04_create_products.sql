DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  -- store_id integer REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  price INTEGER,
  quantity INTEGER
);