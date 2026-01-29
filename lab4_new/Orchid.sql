DROP DATABASE IF EXISTS Orchid;

CREATE DATABASE Orchid;

CREATE TABLE Orchids (
	orchid_id INT IDENTITY(1, 1) PRIMARY KEY,
	orchid_name NVARCHAR(255),
	orchid_image VARCHAR(255),
	orchid_description NVARCHAR(MAX),
	category_id INT,
	is_special BIT,
	orchid_price DECIMAL(10, 2)
)

CREATE TABLE Categories (
	category_id INT IDENTITY(1, 1) PRIMARY KEY,
	category_name NVARCHAR(255)
)

INSERT INTO Categories
VALUES ('Vanda'),
	   ('Dendrobium'),
	   ('Phalaenopsis')

INSERT INTO Orchids 
VALUES ('Pogonia Orchid', '', 'This species have a slender rootstock and usually bear one leaf about halfway up the stem and several at the base.', 1, 1, 27.99),
	   ('Ipsea Orchid', '', 'This endangered species with a very narrow distribution range grows on steep mountain slopes in moist rocky and sunny areas.', 2, 1, 22.99),
	   ('Eria Orchid', '', 'A genus of orchids with more than 50 species distributed in China, the Himalayas, the Indian subcontinent, Southeast Asia, New Guinea, Polynesia, Melanesia and Micronesia.', 3, 0, 19.99)

SELECT * FROM Categories;
SELECT * FROM Orchids;