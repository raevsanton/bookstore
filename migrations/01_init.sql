create table book(
    id SERIAL PRIMARY KEY,
    link VARCHAR(255),
    cover VARCHAR(255),
    title VARCHAR(255),
    subtitle VARCHAR(255),
    authors VARCHAR(255)[],
    description VARCHAR(255),
    price INTEGER
);