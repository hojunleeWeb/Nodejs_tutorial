// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)
// HTTP 모듈로 서버 만들고 실행하기 (결과 비교 파일 : 04\results\server-1.js)

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000, () => {
  console.log("서버가 실행중");
});