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

        const sampleNoticeData = [
          {
            id: 1,
            title: "여름맞이 회사 피크닉",
            author: "김민준",
            description:
              "이번 피크닉은 직원들 간의 소통을 증진하고 즐거운 시간을 보낼 수 있는 좋은 기회가 될 것입니다. 가족들도 함께 참여할 수 있는 행사이니 많은 참여 부탁드립니다. 궁금한 사항이 있으신 분은 인사부로 문의해 주세요. 감사합니다.",
            createdAt: "2024-01-10",
            attachments: "사장",
            views: "9",
            isImportant: "1",
            category: "event",
          },
          {
            id: 2,
            title: "마일리지 적립 관련 공지사항",
            author: "이서연",
            description:
              "안녕하세요, 모든 직원 여러분! 우리 회사에서는 직원들의 노고를 인정하고 사기를 증진시키기 위해 새로운 마일리지 적립 프로그램을 도입하게 되었습니다. 아래의 공지사항을 참고하시어 많은 참여와 관심 부탁드립니다. ",
            createdAt: "2024-01-20",
            attachments: "1",
            views: "7",
            isImportant: "0",
            category: "mileage",
          },
          {
            id: 3,
            title: "전자결재 시스템 도입 및 사용 안내 공지",
            author: "박지훈",
            description:
              "안녕하세요, 모든 직원 여러분! 우리 회사는 업무 효율성을 높이고 문서 관리의 편리성을 강화하기 위해 새로운 전자결재 시스템을 도입하게 되었습니다. 아래의 내용을 참고하시어 전자결재 시스템을 원활히 이용해 주시기 바랍니다.",
            createdAt: "2024-01-25",
            attachments: "0",
            views: "1",
            isImportant: "0",
            category: "approval",
          },
          {
            id: 4,
            title: "인사행정 관련 공지사항",
            author: "정하은",
            description:
              "안녕하세요, 모든 직원 여러분! 인사행정과 관련하여 몇 가지 중요한 사항을 안내드리고자 합니다. 아래의 내용을 참고하시어 인사행정 업무에 차질이 없도록 협조해 주시기 바랍니다.",
            createdAt: "2024-02-08",
            attachments: "0",
            views: "12",
            isImportant: "1",
            category: "human-resource",
          },
          {
            id: 5,
            title: "하반기 교육 일정 및 프로그램",
            author: "최지우",
            description:
              "안녕하세요, 모든 직원 여러분! 회사의 발전과 직원 여러분의 역량 강화를 위해 2024년 하반기 회사 교육 프로그램에 대해 안내드립니다. 아래의 내용을 참고하시어 적극적인 참여 부탁드립니다.",
            createdAt: "2024-02-26",
            attachments: "1",
            views: "0",
            isImportant: "0",
            category: "education",
          },
          {
            id: 6,
            title: "사내 인트라넷 시스템 업데이트",
            author: "강도윤",
            description:
              "안녕하세요, 모든 직원 여러분! 회사의 발전과 직원 여러분의 편의를 위해 몇 가지 중요한 공지 사항을 안내드리고자 합니다. 아래 내용을 꼭 확인해주시기 바랍니다.",
            createdAt: "2024-03-09",
            attachments: "1",
            views: "124",
            isImportant: "0",
            category: "etc",
          },
          {
            id: 7,
            title: "사내 친목회 개최",
            author: "윤서현",
            description:
              "안녕하세요, 모든 직원 여러분! 2024년 8월 20일 (목) 18:00 ~ 21:00, 본사 대강당에서 직원 간 친목 도모 및 소통을 위한 다양한 프로그램이 준비되어 있습니다. 많은 참여 부탁드리며, 참석이 어려운 직원은 미리 인사부에 알려주시기 바랍니다.",
            createdAt: "2024-03-15",
            attachments: "1",
            views: "14",
            isImportant: "0",
            category: "event",
          },
        ];
        let completedInserts = 0;
        sampleNoticeData.forEach((item) => {
          database.run(
            `INSERT OR REPLACE INTO Notices (id, title, author, description, createdAt, attachments, views, isImportant, category)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              item.id,
              item.title,
              item.author,
              item.description,
              item.createdAt,
              item.attachments,
              item.views,
              item.isImportant,
              item.category,
            ],
            (err) => {
              if (err) {
                console.error("Error inserting sample data:", err.message);
              } else {
                console.log(`Sample data inserted: ${item.id}`);
                completedInserts++;
                if (completedInserts === sampleNoticeData.length) {
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

//데이터 지우는 법:저장하고 서버 다시실행.
// 삭제할 데이터의 ID를 배열에 담습니다.
// const idsToDelete = [6, 7]; // 삭제할 데이터의 ID 목록

// // 테이블 데이터 삭제
// idsToDelete.forEach((id) => {
//   database.run(`DELETE FROM Users WHERE id = ?`, [id], (err) => {
//     if (err) {
//       console.error(`Error deleting data with id ${id}:`, err.message);
//     } else {
//       console.log(`Data with id ${id} deleted successfully.`);
//     }
//   });
// });
