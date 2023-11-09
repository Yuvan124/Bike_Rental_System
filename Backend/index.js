const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoUrl = "mongodb+srv://yuvan:yuvan2003@cluster0.4nwue7y.mongodb.net/";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model("UserInfo", UserSchema);

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status: "error", error: "User Exists" });
    }
    await User.create({
      fullName,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

const BookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  fromAddress: String,
  toAddress: String,
  journeyDate: Date,
  journeyTime: String,
  additionalInfo: String,
  paymentMethod: String,
});

const Booking = mongoose.model("BookingInfo", BookingSchema);

app.post("/bookings", async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    fromAddress,
    toAddress,
    journeyDate,
    journeyTime,
    additionalInfo,
    paymentMethod,
  } = req.body;

  try {
    await Booking.create({
      firstName,
      lastName,
      phoneNumber,
      fromAddress,
      toAddress,
      journeyDate,
      journeyTime,
      additionalInfo,
      paymentMethod,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ status: "error", error: "User Not Found" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // If the email and password match, generate a JWT token.
    const token = jwt.sign({ userId: user._id, email: user.email }, "your-secret-key");

    // Return the token and success status.
    return res.status(200).json({ status: "ok", token });
  }

  return res.status(401).json({ status: "error", error: "Login failed" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
