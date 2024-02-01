DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS publications;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    public TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS publications (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    post_text TEXT NOT NULL,
    is_liked BOOLEAN DEFAULT FALSE,
    likes INTEGER DEFAULT 0,
    posted_by uuid REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    comment TEXT NOT NULL,
    post_commented uuid REFERENCES publications(id),
    commented_by uuid REFERENCES users(id),
    is_liked BOOLEAN DEFAULT FALSE,
    likes INTEGER DEFAULT 0
);