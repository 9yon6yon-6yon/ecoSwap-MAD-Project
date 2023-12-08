CREATE TABLE requests (
    "request_id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "listing_id" INT NOT NULL,
    "requested_item_name" VARCHAR(255) NOT NULL,
    "RequestedItemDescription" TEXT,
    "RequestedItemPhoto" TEXT,
    "RequestStatus" VARCHAR(20) DEFAULT 'Pending' CHECK ("RequestStatus" IN ('Pending', 'Accepted', 'Rejected')),
    "RequestDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
