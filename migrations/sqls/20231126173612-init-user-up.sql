CREATE TABLE users(
    "id" SERIAL PRIMARY KEY,
    "name" varchar(50) NOT NULL,
    "email" varchar(50) UNIQUE NOT NULL,
    "password" varchar(255) NOT NULL
)