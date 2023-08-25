CREATE TABLE IF NOT EXISTS cartdata (
    id SERIAL,
    user_id varchar(255) NOT NULL,
    product_id varchar(255) NOT NULL,
    product_title varchar(255) NOT NULL,
    product_price int NOT NULL,
    product_quantity int NOT NULL,
    image_url text NOT NULL
)

ALTER TABLE data 
ADD CONSTRAINT UNIQUENESS UNIQUE (
   product_id 
);