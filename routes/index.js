var express = require("express");
var router = express.Router();
var pdf = require("html-pdf");
var { sampleTemplate } = require("../template/template");
const fs = require("fs");
var path = require("path");
var options = {
  root: path.join(__dirname),
};

/* GET home page. */
router.post("/", function (req, res, next) {
  const name = req.body.name;
  const place = req.body.place;
  console.log("hi");
  pdf
    .create(sampleTemplate(name, place))
    .toFile("./public/file.pdf", function (error, result) {
      if (error) return console.log(error);
      console.log(result);
    });
  res.status(201).json("success");
});

router.get("/show", (req, res) => {
  console.log("hi");
  res.download("../public/file.pdf");
});

module.exports = router;
