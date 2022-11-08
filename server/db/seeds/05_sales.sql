-- INSERT INTO sales (total, delivery_time) VALUES ( 131.49,8);
-- INSERT INTO sales (total, delivery_time) VALUES (20.12,5);
-- INSERT INTO sales (total, delivery_time) VALUES (80.98,9);
-- INSERT INTO sales (total, delivery_time) VALUES (56.78,7);
-- INSERT INTO sales (total, delivery_time) VALUES (39.10,5);

-- INSERT INTO sales (user_id_sales,stores_id_sales, products_id,count_product ) VALUES (1,1,1,1);
-- INSERT INTO sales (user_id_sales,stores_id_sales, products_id,count_product ) VALUES (3,6,4,9);


-- SELECT * FROM sales
-- JOIN products ON products.id = products_id
-- JOIN users ON users.id = user_id_sales
-- JOIN stores ON stores.id = stores_id_sales
-- WHERE users.id =10 ;

-- DELETE FROM sales WHERE  user_id_sales =1 AND products_id =1;

-- - UPDATE sales SET  user_id_sales =3, stores_id_sales =6, products_id =4, count_product = 10
-- WHERE count_product = 9;


-- salesHistory

SELECT * FROM salesHistory
JOIN products ON products.id = products_id
JOIN users ON users.id = user_id_sales
JOIN stores ON stores.id = stores_id_sales
WHERE users.id =10 ;