-- INSERT INTO sales (total, delivery_time) VALUES ( 131.49,8);
-- INSERT INTO sales (total, delivery_time) VALUES (20.12,5);
-- INSERT INTO sales (total, delivery_time) VALUES (80.98,9);
-- INSERT INTO sales (total, delivery_time) VALUES (56.78,7);
-- INSERT INTO sales (total, delivery_time) VALUES (39.10,5);

-- INSERT INTO sales (user_id_sales,stores_id_sales, products_id ) VALUES (1,1,1);
-- INSERT INTO sales (user_id_sales,stores_id_sales, products_id ) VALUES (3,6,4);


SELECT * FROM sales
JOIN products ON products.id = products_id
JOIN users ON users.id = user_id_sales
JOIN stores ON stores.id = stores_id_sales
WHERE users.id =10 ;