DROP TABLE IF EXISTS sales CASCADE;
CREATE TABLE sales (
  -- particular product
  -- user_id who bought its 
  id SERIAL PRIMARY KEY,
  user_id_sales integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  stores_id_sales integer REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  count_product integer
  -- transactions_id integer REFERENCES transactions(id) ON DELETE CASCADE NOT NULL,
  -- total INTEGER NOT NULL,
  -- delivery_time VARCHAR(255) NOT NULL
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


DELETE FROM sales WHERE  user_id_sales =10 AND stores_id_sales = 2 AND products_id=3 AND count_product=4;