DROP TABLE IF EXISTS sales CASCADE;
CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  transactions_id integer REFERENCES transactions(id) ON DELETE CASCADE NOT NULL,
  total INTEGER,
  delivery_time DATETIME
);