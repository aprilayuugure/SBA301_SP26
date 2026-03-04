DROP DATABASE IF EXISTS CarStore2025DB;

CREATE DATABASE CarStore2025DB;

CREATE TABLE account_members (
	member_id NVARCHAR(20) PRIMARY KEY,
	member_password NVARCHAR(80),
	email_address NVARCHAR(100),
	member_role INT
);

CREATE TABLE countries (
	country_id INT IDENTITY(1, 1) PRIMARY KEY,
	country_name NVARCHAR(15)
);

CREATE TABLE cars (
	car_id INT IDENTITY(1, 1) PRIMARY KEY,
	car_name NVARCHAR(40),
	country_id INT,
	units_in_stock SMALLINT,
	unit_price INT,
	created_at DATETIME,
	updated_at DATETIME
)

INSERT INTO account_members(member_id, member_password, email_address, member_role)
VALUES ('PS0001','$2a$10$1QWygAGHZPfHvggZeMg54.ZPqFxIKzyi5CO1j1r9via5MiSXWlkna', 'admin@cinestar.com', 1),
	   ('PS0002','$2a$10$OZ018fKzEiAH6x2Fi.cEOuA8fY3kuPmFPEX6eu8UfbJjhGRnzI7jS', 'staff@cinestar.com', 2),
	   ('PS0003','$2a$10$HqxQhK6.cglaKCnB8tE5oOhIKwhdkhBj05q.KbB13qTpIYccdTGOW', 'member1@cinestar.com', 3),
	   ('PS0004','$2a$10$HqxQhK6.cglaKCnB8tE5oOhIKwhdkhBj05q.KbB13qTpIYccdTGOW', 'member2@cinestar.com', 3);

INSERT INTO countries(country_name)
VALUES ('Japan'),
	   ('USA'),
	   ('France'),
	   ('Germany');

INSERT INTO cars(car_name, country_id, units_in_stock, unit_price, created_at, updated_at)
VALUES ('Honda CV', 1, 12, 18000, '2025-01-01', '2025-01-02'),
	   ('Camry', 1, 23, 19000, '2025-01-01', '2025-01-02'),
	   ('Mercedes', 4, 10, 35000, '2025-01-01', '2025-01-02'),
	   ('Ford Everest', 2, 20, 40000, '2025-01-01', '2025-01-02'),
	   ('Lexus', 2, 10, 90000, '2025-01-01', '2025-01-01'),
	   ('Peugeot 3008', 3, 10, 91000, '2025-01-01', '2025-01-01');

SELECT * FROM account_members;