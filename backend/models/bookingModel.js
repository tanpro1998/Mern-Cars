const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "cars" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    bookedTimesSlots: [{ from: { type: String }, to: { type: String } }],
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
