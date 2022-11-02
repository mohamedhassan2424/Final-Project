INSERT INTO categories (product_id, category_name) VALUES (1,'Dairy');



-- DROP TABLE IF EXISTS categories CASCADE;
-- -- CREATE USERS
-- CREATE TABLE categories(
--   id SERIAL PRIMARY KEY,
-- category_name varying(255) NOT NULL,
-- product_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
-- );