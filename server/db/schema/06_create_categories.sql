DROP TABLE IF EXISTS categories CASCADE;
-- CREATE USERS
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
    -- product_name VARCHAR REFERENCES products(category_name_value) ON DELETE CASCADE NOT NULL,
  product_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  category_name VARCHAR(255) NOT NULL
);