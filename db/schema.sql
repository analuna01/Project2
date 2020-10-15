CREATE DATABASE memory_db;
USE memory_db;

CREATE TABLE users(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  email varchar(45),
  username varchar(45),
  PRIMARY KEY (id)
);

CREATE TABLE boards(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  img_loc varchar(255),
  img_part varchar(45),
  PRIMARY KEY (id)
);

CREATE TABLE leaderboards(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  time INT,
  userid INTEGER(11),
  PRIMARY KEY (id)
);
