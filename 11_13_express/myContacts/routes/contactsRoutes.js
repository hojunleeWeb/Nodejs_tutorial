const express = require("express");
const router = express.Router();
// get : 연락처 가져오기
//app.get("/contacts", (req, res) => {
//  res.send("Contacts page");
//});
// post : 새 연락처 추가
//app.post("/contacts", (req, res) => {
//  res.send("create contacts");
//});

// get : 연락처 1개 가져오기
// app.get("/contacts/:id", (req, res) => {
//   res.send(`view contact for id : ${req.params.id}`);
// });
// // 연락처 수정하기
// app.put("/contacts/:id", (req, res) => {
//   res.send(`update contact for id : ${req.params.id}`);`
// });
// app.delete("/contacts/:id", (req, res) => {
//   res.send(`delete contact for id : ${req.params.id}`);
// });
router
  .route("/")
  .get((req, res) => {
    res.send("Contacts page");
  })
  .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.send("Please include name, email, phone");
    }
    res.send("create contacts");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`view contact for id : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete contact for id : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update contact for id : ${req.params.id}`);
  });

module.exports = router;
