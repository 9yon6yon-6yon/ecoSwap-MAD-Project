CREATE TABLE notifications (
    "notification_id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "notification_text" TEXT,
    "is_read" BOOLEAN DEFAULT FALSE,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
