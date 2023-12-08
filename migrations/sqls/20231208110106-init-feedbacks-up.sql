CREATE TABLE feedbacks (
    "feedback_id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "listing_ref_id" INT NOT NULL,
    "feedback" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);