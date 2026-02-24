DROP DATABASE IF EXISTS Students;

CREATE DATABASE Students;
	
CREATE TABLE Students (
	id INT IDENTITY(1, 1) PRIMARY KEY,
	email VARCHAR(50),
	password VARCHAR(50),
	first_name VARCHAR(100),
	last_name VARCHAR(100),
	marks FLOAT
)

CREATE TABLE Books (
	id INT IDENTITY(1, 1) PRIMARY KEY,
	title VARCHAR(100),
	author VARCHAR(100),
	isbn VARCHAR(50),
	student_id INT

	CONSTRAINT FK_Books_Students 
	FOREIGN KEY (student_id)
	REFERENCES Students(id)
)

SELECT * FROM Students;
SELECT * FROM Books;