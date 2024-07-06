import sqlite3 from "sqlite3";

const databaseName = "toyprj1";
const database = new sqlite3.Database(`./${databaseName}.db`);

database.serialize(() => {
  // 기존 테이블이 있을 경우 삭제 (주의: 기존 데이터를 잃게 됨)
  database.run(`DROP TABLE IF EXISTS Users`, (err) => {
    if (err) {
      console.error("Error dropping Users table:", err.message);
      return;
    }

    // 새 유저 테이블 생성
    database.run(
      `
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
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
  });
});

export default database;
