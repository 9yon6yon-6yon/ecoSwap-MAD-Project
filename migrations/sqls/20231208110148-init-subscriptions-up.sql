CREATE TABLE subscriptions (
    "subscription_id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "type" VARCHAR(20) CHECK (type IN ('Premium', 'Free')) NOT NULL,
    "start_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP
);
