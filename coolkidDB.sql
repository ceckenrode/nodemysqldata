CREATE DATABASE
coolkids;

CREATE TABLE coolkidtable
(
id int NOT NULL AUTO_INCREMENT,
name varchar(55),
coolness_points  int,
attitude  varchar(55),
PRIMARY KEY (id)
);

INSERT INTO coolkidtable (name, coolness_points, attitude) VALUES ('Jerry',75,'Relaxed'),
 ('Elain',65,'Righteous'), ('Kramer', 5, 'Doofish'), ('George', 25, 'Selfish');