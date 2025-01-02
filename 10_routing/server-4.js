// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

const http = require("http");
const server = http.createServer((req, res) => {
  //req.url = 요청 경로
  //req.method = 요청 방식 ex) GET
  const { url: method } = req;
  //const url = req.url
  //const method = req.method;

  res.setHeader("Content-type", "text/plain");

  if (method === "GET" && url === "/home") {
    res.write("HOME");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.end("ABOUT"); //화면에 표시할 write문이 하나밖에 없을 경우
  } else {
    res.end("not found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("서버가 실행중");
});
