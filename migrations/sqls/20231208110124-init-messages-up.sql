CREATE TABLE messages (
    "message_id" SERIAL PRIMARY KEY,
    "sender_id" INT NOT NULL,
    "receiver_id" INT NOT NULL,
    "listing_ref_id" INT NOT NULL,
    "text_msg" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN DEFAULT FALSE
);
