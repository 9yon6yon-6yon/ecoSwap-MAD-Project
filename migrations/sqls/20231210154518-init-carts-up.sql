CREATE TABLE carts (
    "cart_id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "listing_id" INT NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
