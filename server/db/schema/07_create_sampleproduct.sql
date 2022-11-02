DROP TABLE IF EXISTS sampleProduct CASCADE;
CREATE TABLE sampleProduct (
  id SERIAL PRIMARY KEY,
  -- store_id integer REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  category_name_value VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_description VARCHAR(255) NOT NULL,
  product_url VARCHAR(255) NOT NULL,
  price FLOAT, 
  sale_price FLOAT,
  quantity INTEGER

)