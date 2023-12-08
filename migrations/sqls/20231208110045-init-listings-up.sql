CREATE TABLE listings (
    "listingid" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "description" TEXT DEFAULT NULL,
    "photos" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "verification_status" VARCHAR(20) DEFAULT 'Unverified' CHECK (verification_status IN ('Verified', 'Unverified'))
);