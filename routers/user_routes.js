const express = require("express");
const router = express.Router();
const User = require("../models/user_model");

// gets all the user
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
// get an specific post
router.get("/:email", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.params.email });
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
// delete user
router.delete("/:email", async (req, res) => {
  try {
    const data = await User.remove({ email: req.params.email });
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
// update user
router.patch("/:email", async (req, res) => {
  try {
    const data = await User.updateOne(
      { email: req.params.email },
      { $set: req.body }
    );
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const data = await User.findOne({ email: req.params.email });
    res.json(data);
  } catch (err) {
    res.json({ error: err });
  }
});
// create an user
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
