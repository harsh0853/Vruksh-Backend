const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

//defining routes
app.use("/api/");
app.listen(3000, () => {
  console.log("✅ Connected to server on port 3000");
});
