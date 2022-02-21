const router = require("express").Router();
const Booking = require("../models/bookingModel");

router.post("/bookcar", async (req, res) => {
  req.body.transactionId = "1234";
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.send("Booking Successful");
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
