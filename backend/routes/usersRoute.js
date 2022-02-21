const router = require("express").Router();
const User = require("../models/userModel");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(err);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("User register successful!");
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
