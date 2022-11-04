DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  -- user_id_products integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  category_name_value VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_description VARCHAR(255) NOT NULL,
  product_url VARCHAR(255) NOT NULL,
  price FLOAT, 
  sale_price FLOAT,
  quantity INTEGER
  -- catergories table, fruits, vegatbales, dairy, price change the interger to a float ,
  -- Images for products, description of product, image URL status on product true or false, to show or not to show
  -- 
);