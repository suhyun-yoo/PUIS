// 1. express 설치 후, express 연결하기 (npm install express --save 진행 완료)
const express = require('express');
// 2. 포트 넘버 설정하기 : react 서버가 3000으로 열리기 때문에 다른 넘버의 포트로 열기
const port = 5000;
// 3. front와 back 서버의 포트번호가 다르기 때문에 cors 설치하여 충돌 방지하기
// => package.json에서 proxy 설정
const cors = require('cors');
// 4. body-parser 사용 : post 요청 시, req.body를 쉽게 추출할 수 있도록 돕는 모듈
const bodyParser = require('body-parser');
// 5. mysql 사용 : MySQL 사용을 위한 모듈
// const mysql = require('mysql');
// mysql db 생성 후, 연결 시 사용 예정

// ==============================================================================
// express 사용 연결하기
const app = express();

// application/x-www-form-urlencoded 방식이 아닌 다른 인코딩 방식이기 때문에 true 설정
// 참고링크 : https://cheony-y.tistory.com/267
app.use(bodyParser.urlencoded({extended : true})); 

// Content-Type : application/json 방식의 데이터 받아주도록 설정
app.use(bodyParser.json()); 

app.use(cors({
    origin : '*', // 출처 허용 옵션
    credentials : true, // 응답 headers에 accss-control-allow-credentials 추가
    optionsSuccessStatus : 200 // 응답 상태 기본 설정
}));

// ==============================================================================
// 5000번 포트 연결 확인하기
// http://localhost:5000/ 에서 응답 확인 가능
app.get('/', (req,res) => {
    res.send(`연결 성공 : localhost : ${port}`);
});

// 콘솔창에서 응답 확인 가능
app.listen(port, () => {
    console.log(`연결 성공 : localhost : ${port}`);
})