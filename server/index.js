import express from "express";
import morgan from "morgan";
import fs from "fs";
import db from "./database.js";
import multer from "multer"; // multer import 추가
import path from "path";

const THRESHOLD = 2000;
const port = process.env.PORT || 8080;
const app = express();

app.use((req, res, next) => {
  const delayTime = Math.floor(Math.random() * THRESHOLD);

  setTimeout(() => {
    next();
  }, delayTime);
});

app.use(morgan("dev"));
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer 설정: 프로필 이미지를 uploads/ 디렉토리에 저장
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// 유저 목록 조회
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM Users";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        status: "Error",
        error: err.message,
      });
    }

    res.json({
      status: "OK",
      data: rows,
    });
  });
});

// 유저 추가
app.post("/api/users", upload.single("profileImage"), (req, res) => {
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
        status: "Error",
        error: err.message,
      });
    }

    res.status(201).json({
      status: "OK",
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
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Users WHERE id = ?";
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(500).json({
        status: "Error",
        error: err.message,
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "OK",
      message: "User deleted",
    });
  });
});

app.listen(port, () => {
  console.log(`ready to ${port}`);
});
