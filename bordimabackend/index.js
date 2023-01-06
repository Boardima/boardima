const express = require("express");

const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

connectDB();
const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/boardim", require("./routes/boardim"));

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
);

