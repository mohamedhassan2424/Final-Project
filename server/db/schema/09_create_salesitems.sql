DROP TABLE IF EXISTS sales_items CASCADE;
CREATE TABLE sales_items (
id SERIAL PRIMARY KEY,
sales_id REFERENCES ,
quantity INTEGER NOT NULL,
product_id INTEGER REFERENCES,
price INTEGER NOT NULL,
total_price INTEGER NOT NULL,
created_at TIMESTAMP
)

-- need to add the sales history