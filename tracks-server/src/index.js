require("./models/User");
require("./models/Tracks");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
let cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://bibek123:bibek123@cluster0-1krmo.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", err => {
  console.log("Error connecting to mongo" + err);
});

app.get("/", requireAuth, (req, res) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
