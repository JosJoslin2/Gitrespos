USE josazemgning_db;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vorname VARCHAR(100),
    nachname VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    passwort VARCHAR(255),
    erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
