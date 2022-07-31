CREATE DATABASE bookorderingapp;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);