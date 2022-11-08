DROP TABLE IF EXISTS salesHistory CASCADE;
CREATE TABLE salesHistory (
  -- particular product
  -- user_id who bought its 
  id SERIAL PRIMARY KEY,
  user_id_sales integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  stores_id_sales integer REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  count_product integer,
  delivery_time INTEGER
  -- transactions_id integer REFERENCES transactions(id) ON DELETE CASCADE NOT NULL,
  -- total INTEGER NOT NULL,
  -- delivery_time VARCHAR(255) NOT NULL
  -- quatinty of product buying
  -- total price 
  -- 
);