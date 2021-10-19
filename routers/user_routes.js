const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got the user");
});
router.get("/name", (req, res) => {
  res.send("Syed Rifat Ahsan");
});
module.exports = router;
