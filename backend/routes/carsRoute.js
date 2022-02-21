const router = require("express").Router();
const Cars = require("../models/carsModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Cars.find();
    res.status(200).json(cars);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
