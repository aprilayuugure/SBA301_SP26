DROP DATABASE IF EXISTS A3NgoLeMinhQuan_SE18D04;

CREATE DATABASE A3NgoLeMinhQuan_SE18D04;

CREATE TABLE customers (
	customer_id INT IDENTITY(1, 1) PRIMARY KEY,
	customer_full_name NVARCHAR(50),
	telephone VARCHAR(10),
	email_address VARCHAR(50),
	customer_birthday DATE,
	customer_status NVARCHAR(10),
	password VARCHAR(100)
);

CREATE TABLE room_types (
	room_type_id INT IDENTITY(1, 1) PRIMARY KEY,
	room_type_name VARCHAR(50),
	type_description VARCHAR(100),
	type_note VARCHAR(100)
)

CREATE TABLE room_informations (
	room_id INT IDENTITY(1, 1) PRIMARY KEY,
	room_number INT,
	room_detail_description VARCHAR(100),
	room_max_capacity INT,
	room_type_id INT,
	room_status SMALLINT,
	room_price_per_day DECIMAL(10, 2)

	CONSTRAINT FK_RoomInformation_RoomType
		FOREIGN KEY (room_type_id)
		REFERENCES room_types(room_type_id)
)

CREATE TABLE booking_reservations (
    booking_reservation_id INT IDENTITY(1,1) PRIMARY KEY,
    booking_date DATE,
    total_price DECIMAL(12,2),
    customer_id INT,
    booking_status SMALLINT,

    CONSTRAINT FK_BookingReservation_Customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);

CREATE TABLE booking_details (
    booking_reservation_id INT,
    room_id INT,
    start_date DATE,
    end_date DATE,
    actual_price DECIMAL(12,2),

    CONSTRAINT PK_BookingDetail
        PRIMARY KEY (booking_reservation_id, room_id),

    CONSTRAINT FK_BookingDetail_BookingReservation
        FOREIGN KEY (booking_reservation_id)
        REFERENCES booking_reservations(booking_reservation_id),

    CONSTRAINT FK_BookingDetail_RoomInformation
        FOREIGN KEY (room_id)
        REFERENCES room_informations(room_id)
);

INSERT INTO customers (
    customer_full_name,
    telephone,
    email_address,
    customer_birthday,
    customer_status,
    password
)
VALUES ('Yuki Nyakeri', '0901232707', 'yukimeow@gmail.com', '2007-07-27', N'ACTIVE', '$2a$10$BMqsV2TkplSGvhGQ392UFO.4gHKZxAKvVyJoK6qEXfK2xQmSu7A5W'),
	   ('Yuki Nyayaki', '0901505019', 'nyayaki@gmail.com', '2007-05-15', N'ACTIVE', '2a$10$mD1l0BIMx.bLlxgEdPZmc.CBMKnF3TfGFx96Z7/BSwAHuzwAG0cQ6');

INSERT INTO room_types (
	room_type_name,
	type_description,
	type_note
)
VALUES
('Standard Room', 'Basic room with 1 queen bed, suitable for 2 guests', 'No window view'),
('Deluxe Room', 'Spacious room with 1 king bed and city view', 'Includes free breakfast'),
('Family Suite', 'Large suite with 2 bedrooms and living area', 'Suitable for 4-5 guests'),
('Couple Room', '', '');

INSERT INTO room_informations(
	room_number, 
	room_detail_description, 
	room_max_capacity, room_type_id, 
	room_status, 
	room_price_per_day)
VALUES (101, 'Standard room near elevator', 3, 1, 0, 50.00),
	   (102, 'Standard room with garden view', 3, 1, 1, 55.00),
	   (201, 'Deluxe room city view high floor', 3, 2, 0, 90.00),
	   (202, 'Deluxe room with balcony', 3, 2, 1, 95.00),
	   (301, 'Family suite with large living area', 5, 3, 0, 150.00);

INSERT INTO booking_reservations (
    booking_date,
    total_price,
    customer_id,
    booking_status
)
VALUES
('2026-03-02', 180.00, 1, 0),  
('2026-03-02', 300.00, 2, 1);  

INSERT INTO booking_details (
    booking_reservation_id,
    room_id,
    start_date,
    end_date,
    actual_price
)
VALUES
(1, 1, '2026-03-05', '2026-03-07', 100.00),
(1, 3, '2026-03-05', '2026-03-07', 80.00),
(2, 5, '2026-03-10', '2026-03-12', 300.00);
