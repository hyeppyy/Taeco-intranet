import sqlite3 from "sqlite3";

const databaseName = "toyprj1";
const database = new sqlite3.Database(`./${databaseName}.db`);

database.serialize(() => {
  // Users 테이블 생성
  database.run(
    `
        CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          password TEXT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          profileImage TEXT,
          position TEXT,
          birthday TEXT,
          startDate TEXT,
          phone TEXT
        )`,
    (err) => {
      if (err) {
        console.error("Error creating Users table:", err.message);
      } else {
        console.log("Users table created successfully");
      }
    }
  );

  // Notices 테이블 생성
  database.run(
    `
        CREATE TABLE IF NOT EXISTS Notices (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          author TEXT,
          description TEXT,
          createdAt TEXT,
          attachments TEXT,
          views INTEGER DEFAULT 0,
          isImportant INTEGER DEFAULT 0,
          category TEXT
        )`,
    (err) => {
      if (err) {
        console.error("Error creating Notices table:", err.message);
      } else {
        console.log("Notices table created successfully");
      }
    }
  );
});

export default database;
