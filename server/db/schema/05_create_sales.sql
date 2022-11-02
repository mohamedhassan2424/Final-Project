DROP TABLE IF EXISTS sales CASCADE;
CREATE TABLE sales (
  -- particular product
  -- user_id who bought its 
  id SERIAL PRIMARY KEY,
  -- products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  -- transactions_id integer REFERENCES transactions(id) ON DELETE CASCADE NOT NULL,
  total INTEGER NOT NULL,
  delivery_time VARCHAR(255) NOT NULL
  -- quatinty of product buying
  -- total price 
  -- 
);



-- CREATE TABLE sales_items (
-- id SERIAL PRIMARY KEY,
-- sales_id REFERENCES ,
-- quantity INTEGER NOT NULL,
-- product_id interger REFERENCES,
-- price ,
-- total_price
-- created_at TIMESTAMP
-- )

-- sales item table, which would have the qunatinty of the product and cost