DROP DATABASE IF EXISTS prolif;
CREATE DATABASE prolif;

\c prolif

CREATE TABLE artists(
     id SERIAL PRIMARY KEY,
     artistname VARCHAR(500) NOT NULL,
     date_of_birth VARCHAR(20) NOT NULL,
     starsign VARCHAR(200) NOT NULL,
     ethnic_origin TEXT,
     art_sector TEXT NOT NULL,
     save_for_inspo BOOLEAN 

);

CREATE TABLE artwork(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  art_sector TEXT NOT NULL,
  date_created DATE NOT NULL, 
  statement TEXT NOT NULL,
  save_for_inspo BOOLEAN,
  artists_id INT REFERENCES artists (id) ON DELETE CASCADE
  
);


