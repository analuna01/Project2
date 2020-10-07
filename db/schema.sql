CREATE DATABASE memory_db;
USE memory_db;

CREATE TABLE users(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  username varchar(45),
  PRIMARY KEY (id)
);

CREATE TABLE images(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  genre_tag VARCHAR(45),
  image BLOB,
  PRIMARY KEY (id)
);

CREATE TABLE leaderboard(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  score INT,
  userid INTEGER(11),
  PRIMARY KEY (id)
);
