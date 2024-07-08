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
        const sampleUsersData = [
          {
            id: 1,
            password: "1234", // 문자열로 변경
            name: "admin",
            email: "admin@gmail.com",
            profileImage: "../public/images/_Avatar_.png",
            position: "사장",
            birthday: "1987.05.24",
            startDate: "2004.07.08",
            phone: "01022079124",
          },
          {
            id: 2,
            password: "1234", // 문자열로 변경
            name: "user1",
            email: "user1@gmail.com",
            profileImage: "../public/images/_Avatar_.png",
            position: "차장",
            birthday: "1990.09.17",
            startDate: "2004.09.08",
            phone: "01012345678",
          },
          {
            id: 3,
            password: "1234", // 문자열로 변경
            name: "user2",
            email: "user2@gmail.com",
            profileImage: "../public/images/_Avatar_.png",
            position: "과장",
            birthday: "1990.09.17",
            startDate: "2004.09.08",
            phone: "01012345678",
          },
          {
            id: 4,
            password: "1234", // 문자열로 변경
            name: "user3",
            email: "user3@gmail.com",
            profileImage: "../public/images/_Avatar_.png",
            position: "대리",
            birthday: "1990.09.17",
            startDate: "2004.09.08",
            phone: "01012345678",
          },
          {
            id: 5,
            password: "1234", // 문자열로 변경
            name: "user4",
            email: "user4@gmail.com",
            profileImage: "../public/images/_Avatar_.png",
            position: "사원",
            birthday: "1990.09.17",
            startDate: "2004.09.08",
            phone: "01012345678",
          },
        ];
        let completedInserts = 0;
        sampleUsersData.forEach((item) => {
          database.run(
            `INSERT OR REPLACE INTO Users (id, password, name, email, profileImage, position, birthday, startDate, phone)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              item.id,
              item.password,
              item.name,
              item.email,
              item.profileImage,
              item.position,
              item.birthday,
              item.startDate,
              item.phone,
            ],
            (err) => {
              if (err) {
                console.error("Error inserting sample data:", err.message);
              } else {
                console.log(`Sample data inserted: ${item.id}`);
                completedInserts++;
                if (completedInserts === sampleUsersData.length) {
                  console.log("Sample Users data insertion process completed.");
                }
              }
            }
          );
        });
      }
    }
  );
  // Approval 테이블 생성
  database.run(
    `
      CREATE TABLE IF NOT EXISTS Approval (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        title TEXT,
        category TEXT,
        startdate TEXT,
        enddate TEXT,
        submitdate TEXT,
        submitreason TEXT,
        refusereason TEXT,
        isApprove INTEGER DEFAULT 0
      )`,
    (err) => {
      if (err) {
        console.error("Error creating Approval table:", err.message);
      } else {
        console.log("Approval table created successfully");
        const sampleApprovalData = [
          {
            id: 1,
            user: "user1", // 문자열로 변경
            title: "휴가 신청합니다",
            category: "휴가",
            startdate: "2024.07.08",
            enddate: "2024.08.08",
            submitdate: "2024.07.08",
            submitreason: "여름휴가",
            refusereason: "",
            isApprove: null,
          },
          {
            id: 2,
            user: "user2", // 문자열로 변경
            title: "휴가 신청합니다",
            category: "휴가",
            startdate: "2024.06.08",
            enddate: "2024.07.08",
            submitdate: "2024.06.08",
            submitreason: "여름휴가",
            refusereason: "",
            isApprove: null,
          },
          {
            id: 3,
            user: "user3", // 문자열로 변경
            title: "휴가 신청합니다",
            category: "휴가",
            startdate: "2024.05.08",
            enddate: "2024.06.08",
            submitdate: "2024.05.08",
            submitreason: "여름휴가",
            refusereason: "",
            isApprove: null,
          },
          {
            id: 4,
            user: "user4", // 문자열로 변경
            title: "휴가 신청합니다",
            category: "휴가",
            startdate: "2024.07.03",
            enddate: "2024.08.03",
            submitdate: "2024.07.03",
            submitreason: "여름휴가",
            refusereason: "",
            isApprove: null,
          },
          {
            id: 5,
            user: "user1", // 문자열로 변경
            title: "반차 신청합니다",
            category: "반차",
            startdate: "2024.06.08",
            enddate: "2024.06.08",
            submitdate: "2024.06.05",
            submitreason: "병원 외진",
            refusereason: "",
            isApprove: true,
          },
          {
            id: 6,
            user: "user2", // 문자열로 변경
            title: "병가 신청합니다",
            category: "기타",
            startdate: "2024.03.08",
            enddate: "2024.03.21",
            submitdate: "2024.03.07",
            submitreason: "교통사고",
            refusereason: "",
            isApprove: true,
          },
          {
            id: 7,
            user: "user3", // 문자열로 변경
            title: "병가 신청합니다",
            category: "기타",
            startdate: "2024.04.08",
            enddate: "2024.04.13",
            submitdate: "2024.07.08",
            submitreason: "코로나",
            refusereason: "진단서 미제출",
            isApprove: false,
          },
          {
            id: 8,
            user: "user4", // 문자열로 변경
            title: "휴가 신청합니다",
            category: "휴가",
            startdate: "2024.09.11",
            enddate: "2024.09.21",
            submitdate: "2024.09.08",
            submitreason: "가을휴가",
            refusereason: "사용가능연차없음",
            isApprove: false,
          },
        ];
        let completedInserts = 0;
        sampleApprovalData.forEach((item) => {
          database.run(
            `INSERT OR REPLACE INTO Approval (id, user, title, category, startdate, enddate, submitdate, submitreason, refusereason, isApprove)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              item.id,
              item.user,
              item.title,
              item.category,
              item.startdate,
              item.enddate,
              item.submitdate,
              item.submitreason,
              item.refusereason,
              item.isApprove === true ? 1 : item.isApprove === false ? 0 : null,
            ],
            (err) => {
              if (err) {
                console.error("Error inserting sample data:", err.message);
              } else {
                console.log(`Sample data inserted: ${item.id}`);
                completedInserts++;
                if (completedInserts === sampleApprovalData.length) {
                  console.log(
                    "Sample Approval data insertion process completed."
                  );
                }
              }
            }
          );
        });
      }
    }
  );
  // Mileage 테이블 생성
  // database.run(`DROP TABLE IF EXISTS Mileage`, (err) => {
  //   if (err) {
  //     console.error('Error dropping Mileage table:', err.message);
  //   } else {
  //     console.log('Mileage table dropped successfully');

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
        console.error("Error creating Mileage table:", err.message);
      } else {
        console.log("Mileage table created successfully");

        // 테이블 생성 후 샘플 데이터 삽입
        const sampleMileageData = [
          {
            id: 1,
            category: "재사용 및 업사이클링",
            score: 2,
            employee: "최배달",
            date: "2023-01-02",
            image:
              "https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg",
            isApprove: true,
          },
          {
            id: 2,
            category: "대중교통 및 자전거 이용",
            score: 3,
            employee: "김철수",
            date: "2024-02-02",
            image:
              "https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg",
            isApprove: null,
          },
          {
            id: 3,
            category: "에너지 절약",
            score: 1,
            employee: "홍길동",
            date: "2024-04-02",
            image:
              "https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2023/09/06/bdc946a8-7e6d-4767-b467-47763855c085.jpg",
            isApprove: true,
          },
          {
            id: 5,
            category: "재활용 및 분리수거",
            score: 1,
            employee: "홍길동",
            date: "2024-01-02",
            image:
              "https://lh3.googleusercontent.com/proxy/oLcycr-SJ__AuukCJ6ry5f_4iKWij98LMzgm0885Q34zKnhEEUxbGFvRlQK5Ui52gzK4nIK6as0UXCbNcR8idp2crfdsN1Svjco98pHC141N-Q",
            isApprove: null,
          },
          {
            id: 6,
            category: "재사용 및 업사이클링",
            score: 1,
            employee: "홍길동",
            date: "2024-01-04",
            image:
              "https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg",
            isApprove: true,
          },
          {
            id: 7,
            category: "대중교통 및 자전거 이용",
            score: 1,
            employee: "홍길동",
            date: "2024-01-07",
            image:
              "https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg",
            isApprove: false,
          },
          {
            id: 8,
            category: "재사용 및 업사이클링",
            score: 2,
            employee: "최배달",
            date: "2022-01-02",
            image:
              "https://www.koreaittimes.com/news/photo/202010/100899_46719_042.jpg",
            isApprove: false,
          },
          {
            id: 9,
            category: "대중교통 및 자전거 이용",
            score: 3,
            employee: "김철수",
            date: "2023-11-02",
            image:
              "https://res.heraldm.com/content/image/2016/12/01/20161201000069_0.jpg",
            isApprove: null,
          },
          {
            id: 10,
            category: "에너지 절약",
            score: 1,
            employee: "홍길동",
            date: "2024-02-12",
            image:
              "https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2023/09/06/bdc946a8-7e6d-4767-b467-47763855c085.jpg",
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
                console.error("Error inserting sample data:", err.message);
              } else {
                console.log(`Sample data inserted: ${item.id}`);
              }
            }
          );
        });

        console.log("Sample mileage data insertion process started.");
      }
    }
  );
});

export default database;
