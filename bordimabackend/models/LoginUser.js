const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoginUserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

module.exports = mongoose.model("LogonUser", LoginUserSchema);
