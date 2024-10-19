var express = require("express");
var router = express.Router();

// routes/index.js : app.js에서 해당 파일을 require (=import)하여 indexRouter로 지정 -> indexRouter를 루트로 지정
// routes/index.js : root경로일 때 views 폴더 내부 index.ejs를 출력 title = 홈페이지, pageName = home.ejs를 저장

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "홈페이지", pageName: "home.ejs" });
});

module.exports = router;
