/* Replace with your SQL commands */
CREATE TABLE blogs(
    "blogid" SERIAL PRIMARY KEY,
    "post" varchar(255) NOT NULL,
    "user_id" INTEGER  NOT NULL,
    "status" varchar(255) NOT NULL
)
