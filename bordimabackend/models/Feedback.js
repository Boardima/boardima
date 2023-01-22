const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedBackSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please provide full name"],
  },
  address: {
    type: String,
    required: [true, "Please provide address"],
  },
  dob: {
    type: String,
    required: [true, "Please provide Date of birth"],
  },
  university: {
    type: String,
    required: [true, "Please provide University"],
  },
  universityRegistrationNumber: {
    type: String,
    required: [true, "Please provide University Registration Number"],
  },
  fatherName: {
    type: String,
    required: [true, "Can not be empty"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Can not be empty"],
  },
  motherName: {
    type: String,
    required: [true, "Can not be empty"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Can not be empty"],
  },
  numberOfSibblings: {
    type: String,
    default: "0",
  },
  monthlyRevenue: {
    type: String,
    required: [true, "Can not be empty"],
  },
  url: {
    type: String,
    required: [true, "Can not be empty"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
  },
  telephoneNumber: {
    type: String,
    required: [true, "Can not be empty"],
  },
  feedback: {
    type: String,
    required: [true, "Can not be empty"],
  },
});

module.exports = mongoose.model("FeedBack", FeedBackSchema);
