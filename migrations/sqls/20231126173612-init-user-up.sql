CREATE TABLE users(
    "id" SERIAL PRIMARY KEY,
    "email" varchar(50) NOT NULL,
    "password" varchar(255) NOT NULL
)