// 1. express 설치 후, express 연결하기 (npm install express --save 진행 완료)
const express = require("express");
// 2. 포트 넘버 설정하기 : react 서버가 3000으로 열리기 때문에 다른 넘버의 포트로 열기
const port = 5000;
// 3. front와 back 서버의 포트번호가 다르기 때문에 cors 설치하여 충돌 방지하기
// => package.json에서 proxy 설정
const cors = require("cors");
// 4. body-parser 사용 : post 요청 시, req.body를 쉽게 추출할 수 있도록 돕는 모듈
const bodyParser = require("body-parser");
// 5. mysql 사용 : MySQL 사용을 위한 모듈
const mysql = require("mysql");
// mysql db 생성 후, 연결 시 사용 예정

// ========== mysql 연결하기 ==========
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9616",
  database: "puis",
  // mysql 다중 쿼리 작성을 위해 추가
  multipleStatements: true,
});

db.connect();

db.query("SELECT * from Users", (error, rows, fields) => {
  //   if (error) return error;
  if (error) {
    res.send({ result: error });
  }
  console.log("User info is : ", rows);
});

// ========== express 사용 연결하기 ==========
const app = express();

// application/x-www-form-urlencoded 방식이 아닌 다른 인코딩 방식이기 때문에 true 설정
// 참고링크 : https://cheony-y.tistory.com/267
app.use(bodyParser.urlencoded({ extended: true }));
// Content-Type : application/json 방식의 데이터 받아주도록 설정
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    // credentials: true, // 응답 headers에 accss-control-allow-credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 기본 설정
  })
);

// ========== login 정보 받기 ==========
app.post("/login", (req, res) => {
  console.log(req.body);
  let id = req.body.ID;
  let pw = req.body.PW;
  let result = "";

  // 3. sql 쿼리문을 사용하여 user 정보 전체 가져오기
  db.query(
    "SELECT id,password FROM Users WHERE id = ? AND password = ? ",
    [id, pw],
    (err, data) => {
      if (!err) {
        const userData = data;
        console.log(userData);

        // for문을 통해, 해당 인덱스의 ID와 PW가 요청이 들어온 ID와 PW가 일치한다면 success 반환
        // for (let i = 0; i < userData.length; i++) {
        //   if (userData[i].id === id && userData[i].password === pw) {
        //     // res.send({ 'login' : 'success'});
        //     result = "success";
        //   } else {
        //     result = "fail";
        //   }
        // }
        if (userData.length > 0) {
          res.send({ result: "success" });
        } else {
          res.send({ result: "fail" });
        }
      }
    }
  );
});
// ========== signup 정보 받기 ==========
app.post("/signup", (req, res) => {
  console.log(req.body);
  let id = req.body.ID;
  let Email = req.body.Email;
  let pw = req.body.PW;
  let address = req.body.Address;
  let phone = req.body.Phone;

  // 2. sql 쿼리문을 사용하여 table의 각 컬럼에 추가할 값 넣기
  db.query(
    "INSERT INTO puis.Users(`id`, `password`, `email`,`address`,`phone`) VALUES (?,?,?,?,?)",
    [id, pw, Email, address, phone],
    (err) => {
      if (err) {
        console.log("실패");
        res.send({ regist: "fail" });
      }
    }
  );
  res.send({ regist: "success" });
});

// ========== 5000번 포트 연결 확인하기 ==========
// http://localhost:5000/ 에서 응답 확인 가능
app.get("/", (req, res) => {
  res.send(`연결 성공 : localhost : ${port}`);
});

// 콘솔창에서 응답 확인 가능
app.listen(port, () => {
  console.log(`연결 성공 : localhost : ${port}`);
});
