import sqlite3 from 'sqlite3';

const databaseName = 'toyprj1';
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
        console.error('Error creating Users table:', err.message);
      } else {
        console.log('Users table created successfully');
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
        console.error('Error creating Notices table:', err.message);
      } else {
        console.log('Notices table created successfully');
      }
    }
  );

  // Mileage 테이블 생성
  database.run(
    `
    CREATE TABLE IF NOT EXISTS Mileage (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      score INTEGER NOT NULL,
      employee TEXT NOT NULL,
      date TEXT NOT NULL,
      image TEXT,
      isApprove INTEGER DEFAULT 0
    )`,
    (err) => {
      if (err) {
        console.error('Error creating Mileage table:', err.message);
      } else {
        console.log('Mileage table created successfully');

        // 테이블 생성 후 샘플 데이터 삽입
        const sampleMileageData = [
          {
            id: 1,
            category: '재사용 및 업사이클링',
            score: 2,
            employee: '최배달',
            date: '2023-01-02',
            image:
              'https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg',
            isApprove: true,
          },
          {
            id: 2,
            category: '대중교통 및 자전거 이용',
            score: 3,
            employee: '김철수',
            date: '2024-02-02',
            image:
              'https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg',
            isApprove: null,
          },
          {
            id: 3,
            category: '에너지 절약',
            score: 1,
            employee: '홍길동',
            date: '2024-04-02',
            image:
              'https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2023/09/06/bdc946a8-7e6d-4767-b467-47763855c085.jpg',
            isApprove: true,
          },
          {
            id: 5,
            category: '재활용 및 분리수거',
            score: 1,
            employee: '홍길동',
            date: '2024-01-02',
            image:
              'https://lh3.googleusercontent.com/proxy/oLcycr-SJ__AuukCJ6ry5f_4iKWij98LMzgm0885Q34zKnhEEUxbGFvRlQK5Ui52gzK4nIK6as0UXCbNcR8idp2crfdsN1Svjco98pHC141N-Q',
            isApprove: null,
          },
          {
            id: 6,
            category: '재사용 및 업사이클링',
            score: 1,
            employee: '홍길동',
            date: '2024-01-04',
            image:
              'https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg',
            isApprove: true,
          },
          {
            id: 7,
            category: '대중교통 및 자전거 이용',
            score: 1,
            employee: '홍길동',
            date: '2024-01-07',
            image:
              'https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg',
            isApprove: false,
          },
          {
            id: 8,
            category: '재사용 및 업사이클링',
            score: 2,
            employee: '최배달',
            date: '2022-01-02',
            image:
              'https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg',
            isApprove: false,
          },
          {
            id: 9,
            category: '대중교통 및 자전거 이용',
            score: 3,
            employee: '김철수',
            date: '2023-11-02',
            image:
              'https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg',
            isApprove: null,
          },
          {
            id: 10,
            category: '에너지 절약',
            score: 1,
            employee: '홍길동',
            date: '2024-02-12',
            image:
              'https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2023/09/06/bdc946a8-7e6d-4767-b467-47763855c085.jpg',
            isApprove: null,
          },
        ];

        // 각 항목을 개별적으로 삽입
        sampleMileageData.forEach((item) => {
          database.run(
            `INSERT OR REPLACE INTO Mileage (id, category, score, employee, date, image, isApprove)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
              item.id,
              item.category,
              item.score,
              item.employee,
              item.date,
              item.image,
              item.isApprove === true ? 1 : item.isApprove === false ? 0 : null,
            ],
            (err) => {
              if (err) {
                console.error('Error inserting sample data:', err.message);
              } else {
                console.log(`Sample data inserted: ${item.id}`);
              }
            }
          );
        });

        console.log('Sample mileage data insertion process started.');
      }
    }
  );
});

export default database;
