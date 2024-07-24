select 'customers' as column_name,count(*) as number_of_rows from customers 
UNION 
select 'geolocation',count(*) from geolocation
UNION
select 'order_items',count(*) from order_items
UNION
select 'order_payments',count(*) from order_payments
UNION
select 'order_reviews',count(*) from order_reviews
UNION
select 'orders',count(*) from orders
UNION
select 'prod_cat_translation',count(*) from prod_cat_translation
UNION
SELECT 'products',count(*) from products
UNION
select 'sellers',count(*) from sellers order by number_of_rows;


SELECT column_name
FROM information_schema.columns
WHERE table_name = 'order_items'
AND table_schema = 'public';

-- SELECT * FROM information_schema.schemata;

-- SELECT * FROM information_schema.tables;

-- SELECT EXISTS (
--     SELECT 1
--     FROM information_schema.tables
--     WHERE table_schema = 'public'
--     AND table_name = 'sellers'
-- );



-- SELECT table_name, table_schema
-- FROM information_schema.tables
-- WHERE table_name = 'sellers';