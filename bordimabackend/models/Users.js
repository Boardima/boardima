const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegisteredUserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide a valid Email"],
  },
  address: {
    type: String,
    required: [true, "Please provide address"],
  },
  gender: {
    type: String,
    required: [true, "Please provide your gender"],
  },
  university: {
    type: String,
    required: [true, "Please provide University"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

module.exports = mongoose.model("RegisteredUsers", RegisteredUserSchema);
