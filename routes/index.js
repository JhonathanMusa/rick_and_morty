const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome home");
});

router.get("/about", (req, res) => {
  res.send("Welcome about page");
});

router.get("/contact", (req, res) => {
  res.send("Welcome contact page");
});

module.exports = router;
