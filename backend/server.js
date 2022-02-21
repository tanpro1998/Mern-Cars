const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const ConnectDB = require("./mongoDB/Connect");

const carsRoute = require("./routes/carsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");

dotenv.config();
ConnectDB();

app.use(express.json());

app.use("/api/cars", carsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
