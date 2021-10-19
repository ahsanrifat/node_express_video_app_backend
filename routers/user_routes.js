const express = require("express");
const router = express.Router();
const User = require("../models/user_model");

router.get("/", (req, res) => {
  res.send("Got the user");
});
router.get("/name", (req, res) => {
  res.send("Syed Rifat Ahsan");
});
router.post("/create", async (req, res) => {
  const user = new User(req.body);
  try {
    const data = await user.save();
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
module.exports = router;
