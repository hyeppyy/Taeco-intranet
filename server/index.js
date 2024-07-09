import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import db from './database.js';
import multer from 'multer'; // multer import 추가
import path from 'path';

const THRESHOLD = 2000;
const port = process.env.PORT || 8080;
const app = express();

app.use((req, res, next) => {
  const delayTime = Math.floor(Math.random() * THRESHOLD);

  setTimeout(() => {
    next();
  }, delayTime);
});

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const noticeUploadsDir = path.join(process.cwd(), 'notice_uploads');
if (!fs.existsSync(noticeUploadsDir)) {
  fs.mkdirSync(noticeUploadsDir, { recursive: true });
}

const mileageUploadsDir = path.join(process.cwd(), 'mileage_uploads');
if (!fs.existsSync(mileageUploadsDir)) {
  fs.mkdirSync(mileageUploadsDir, { recursive: true });
}

// Multer 설정: 프로필 이미지를 uploads/ 디렉토리에 저장
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const noticeStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'notice_uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const noticeUpload = multer({ storage: noticeStorage });

// 유저 목록 조회
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM Users';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    res.json({
      status: 'OK',
      data: rows,
    });
  });
});

// 유저 추가
app.post('/api/users', upload.single('profileImage'), (req, res) => {
  const { name, email, position, birthday, startDate, phone } = req.body;
  const profileImage = req.file ? `/uploads/${req.file.filename}` : null; // Get uploaded image path if available

  const sql = `INSERT INTO Users (name, email, profileImage, position, birthday, startDate, phone)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    name,
    email,
    profileImage,
    position,
    birthday,
    startDate,
    phone,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    res.status(201).json({
      status: 'OK',
      data: {
        id: this.lastID,
        name,
        email,
        profileImage,
        position,
        birthday,
        startDate,
        phone,
      },
    });
  });
});

// 유저 삭제
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Users WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        status: 'Error',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'OK',
      message: 'User deleted',
    });
  });
});

// 공지사항 목록 조회
app.get('/api/notices', (req, res) => {
  //Notices 테이블의 모든 데이터를 가져오되, 생성일(createdAt)을 기준으로 최신순으로 정렬
  const sql = 'SELECT * FROM Notices ORDER BY createdAt DESC';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    res.json({
      status: 'OK',
      data: rows,
    });
  });
});

// 공지사항 생성
app.post('/api/notices', noticeUpload.single('attachments'), (req, res) => {
  const { category, title, author, isImportant, description } = req.body;
  const attachments = req.file ? `/notice_uploads/${req.file.filename}` : null;
  const currentDate = new Date();
  const yyyy = currentDate.getFullYear();
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const createdAt = `${yyyy}-${mm}-${dd}`;

  const sql = `INSERT INTO Notices (category, title, author, createdAt, attachments, isImportant, description)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    category,
    title,
    author,
    createdAt,
    attachments,
    isImportant === '1' ? 1 : 0,
    description,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    res.status(201).json({
      status: 'OK',
      data: {
        id: this.lastID,
        category,
        title,
        author,
        createdAt,
        attachments,
        views: 0,
        isImportant: isImportant === '1' ? 1 : 0,
        description,
      },
    });
  });
});

// 공지사항 삭제
app.delete('/api/notices/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Notices WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        status: 'Error',
        message: 'Notice not found',
      });
    }

    res.status(200).json({
      status: 'OK',
      message: 'Notice deleted',
    });
  });
});

// 공지사항 조회수 증가
app.put('/api/notices/:id/view', (req, res) => {
  const { id } = req.params;

  const sql = 'UPDATE Notices SET views = views + 1 WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        status: 'Error',
        message: 'Notice not found',
      });
    }

    res.status(200).json({
      status: 'OK',
      message: 'View count increased',
    });
  });
});

// 마일리지 이미지를 위한 Multer 설정
const mileageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'mileage_uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const mileageUpload = multer({ storage: mileageStorage });

// 1. 마일리지 내역 조회 (사용자 및 관리자용)
app.get('/api/mileage', (req, res) => {
  const sql = 'SELECT * FROM Mileage ORDER BY date DESC';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        status: 'Error',
        error: err.message,
      });
    }

    res.json({
      status: 'OK',
      data: rows,
    });
  });
});

// app.get('/api/mileage', (req, res) => {
//   const { userId, isAdmin } = req.query; // 사용자 ID와 관리자 여부를 쿼리로 받음
//   let sql = 'SELECT * FROM Mileage';
//   let params = [];

//   if (!isAdmin) {
//     // 관리자가 아닌 경우, 해당 사용자의 데이터만 조회
//     sql += ' WHERE employee = ?';
//     params.push(userId);
//   }

//   sql += ' ORDER BY date DESC';

//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       return res.status(500).json({ status: 'Error', error: err.message });
//     }
//     res.json({ status: 'OK', data: rows });
//   });
// });

// 2. 마일리지 신청 (사용자용)
app.post('/api/mileage/apply', mileageUpload.single('image'), (req, res) => {
  const { category, score, employee, date } = req.body;
  const image = req.file ? `/mileage_uploads/${req.file.filename}` : null;

  const sql = `INSERT INTO Mileage (category, score, employee, date, image, isApprove)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [category, score, employee, date, image, null]; // isApprove를 null(미승인)으로 설정

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ status: 'Error', error: err.message });
    }
    res.status(201).json({
      status: 'OK',
      data: {
        id: this.lastID,
        category,
        score,
        employee,
        date,
        image,
        isApprove: null,
      },
    });
  });
});

// 3. 마일리지 승인/거절 (관리자용)
app.put('/api/mileage/:id/approve', (req, res) => {
  const { id } = req.params;
  const { isApprove, reason } = req.body;

  const sql = 'UPDATE Mileage SET isApprove = ?, rejectReason = ? WHERE id = ?';
  db.run(sql, [isApprove ? 1 : 0, reason || null, id], function (err) {
    if (err) {
      return res.status(500).json({ status: 'Error', error: err.message });
    }

    if (this.changes === 0) {
      return res
        .status(404)
        .json({ status: 'Error', message: 'Mileage record not found' });
    }

    res.status(200).json({
      status: 'OK',
      message: isApprove ? 'Mileage approved' : 'Mileage rejected',
    });
  });
});

app.listen(port, () => {
  console.log(`ready to ${port}`);
});
