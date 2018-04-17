DROP DATABASE IF EXISTS jamazonDB;
CREATE database jamazonDB;

USE jamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10, 4) NULL,
    stock_quantity FLOAT(15) NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES('Pearl Jam', 'Jammery', 19.93, 250), ('Carrot Cake', 'Jammery', 4.69, 250), ('Man-Jam', 'Jammery', 5.27, 250), ('Jambalaya-Jan New Orleans Jam', 'Jammery', 4.79, 250), ('Black Cherry BDSM Jam', 'Jammery', 6.66, 250), ('Fig & Honey Fahyza', 'Jammery', 4.20, 250);

INSERT INTO products(`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES('Mango Chutney', 'Chutneria', 4.66, 150), ('Blueberry Chipotle Chutney', 'Chutneria', 4.26, 150), ('Ginger Chutney', 'Chutneria', 6.66, 150), ('Beetroot Chutney', 'Chutneria', 4.37, 150), ('Green Tomato Chutney', 'Chutneria', 5.67, 150), ('Mint Raita Chutney', 'Chutneria', 6.66, 150);