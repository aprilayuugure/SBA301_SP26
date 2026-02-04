DROP DATABASE IF EXISTS A2NgoLeMinhQuan_SE18D04;

CREATE DATABASE A2NgoLeMinhQuan_SE18D04;

CREATE TABLE system_accounts (
	account_id INT IDENTITY(1, 1) PRIMARY KEY,
	account_name NVARCHAR(50),
	account_email VARCHAR(100),
	account_role INT DEFAULT 2,
	account_password VARCHAR(50)
);

CREATE TABLE categories (
	category_id INT IDENTITY(1, 1) PRIMARY KEY,
	category_name NVARCHAR(50),
	category_description NVARCHAR(MAX),
	parent_category_id INT,
	is_active BIT NOT NULL DEFAULT 0,

	CONSTRAINT FK_category_parent
			   FOREIGN KEY (parent_category_id)
			   REFERENCES categories(category_id)
);	

CREATE TABLE news_articles (
	news_article_id INT IDENTITY(1, 1) PRIMARY KEY,
	news_title NVARCHAR(100),
	headline NVARCHAR(100),
	created_date DATE,
	news_content NVARCHAR(MAX),
	news_source NVARCHAR(100),
	news_status BIT NOT NULL DEFAULT 0,
	news_category INT,
	created_by_id INT,
	updated_by_id INT,
	modified_date DATE,

	CONSTRAINT fk_news_category
			   FOREIGN KEY (news_category)
			   REFERENCES categories(category_id),

	CONSTRAINT fk_created_by
			   FOREIGN KEY (created_by_id)
			   REFERENCES system_accounts(account_id),

	CONSTRAINT FK_updated_by
			   FOREIGN KEY (updated_by_id)
			   REFERENCES system_accounts(account_id),
);

CREATE TABLE tags (
	tag_id INT IDENTITY(1, 1) PRIMARY KEY,
	tag_name NVARCHAR(50),
	note NVARCHAR(100)
);

CREATE TABLE news_tag (
	news_article_id INT NOT NULL,
	tag_id INT NOT NULL,

	PRIMARY KEY(news_article_id, tag_id),

	CONSTRAINT FK_newstag_newsarticle
			   FOREIGN KEY (news_article_id)
			   REFERENCES news_articles(news_article_id),

	CONSTRAINT FK_newstag_tag
			   FOREIGN KEY (tag_id)
			   REFERENCES tags(tag_id)
);

INSERT INTO system_accounts (account_name, account_email, account_role, account_password)
VALUES 
('Alex Wayne', 'admin@example.com', 1, 'admin'),
('Ballettia Jack', 'blackjack@example.com', 2, 'abcxyz'),
('Cynder Ryes', 'cynder123@example.com', 2, '123456');


INSERT INTO categories (category_name, category_description, parent_category_id, is_active)
VALUES
('Technology', 'Tech-related news', NULL, 1),
('Health', 'Health-related news', NULL, 1),
('AI', 'Artificial Intelligence', 1, 1),
('Fitness', 'Fitness and lifestyle', 2, 1);

INSERT INTO tags (tag_name, note)
VALUES
('AI', 'Artificial Intelligence'),
('ML', 'Machine Learning'),
('Health', 'Health topics'),
('Workout', 'Fitness related');

INSERT INTO news_articles (news_title, headline, created_date, news_content, news_source, news_status, news_category, created_by_id, updated_by_id, modified_date)
VALUES
('AI Revolution 2026', 'AI is changing the world', GETDATE(), 'Artificial Intelligence is rapidly evolving...', 'Tech Daily', 1, 3, 1, 1, NULL),
('Daily Fitness Tips', 'Stay healthy every day', GETDATE(), 'Simple habits to improve fitness...', 'Health Weekly', 1, 4, 2, 2, NULL);

INSERT INTO news_tag (news_article_id, tag_id)
VALUES
(1, 1), 
(1, 2),
(2, 3),
(2, 4); 

SELECT * FROM system_accounts;
SELECT * FROM categories;
SELECT * FROM news_articles;
SELECT * FROM tags;
SELECT * FROM news_tag;


