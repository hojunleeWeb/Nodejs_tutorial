const express = require("express");
const app = express();

// method : post, put, delete
// post : 서버에 데이터를 전달
// put : 서버에 데이터를 수정
// delete : 서버에서 데이터를 삭제

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", require("./routes/ContactsRoutes"));
app.listen(3000, () => {
  console.log("서버 실행중");
});
