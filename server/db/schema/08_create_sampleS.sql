DROP TABLE IF EXISTS sampleS CASCADE;
CREATE TABLE sampleS (
  id SERIAL PRIMARY KEY,
  -- products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  store_name VARCHAR(255) NOT NULL,
-- owner of the store, its id
  rating VARCHAR(255) NOT NULL,
  image_link VARCHAR(255) NOT NULL

  -- created_at TIMESTAMP FOR ALL THE TAB
  -- description of the store
  -- deactive column(true or false) for the store
);