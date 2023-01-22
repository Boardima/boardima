const mongoose = require("mongoose");

const geocoder = require("../utils/geocoder");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nic: {
    type: String,
    required: [true, "Please add a boardim ID"],
    unique: true,
  },
  firstName: String,
  lasttName: String,
  address: {
    type: String,
    required: [true, "Please add address"],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    default: 'None',
  },
  university: {
    type: String,
  },
  faculty: {
    type: String,
  },
  password: {
    type: String,
  },
  userImage: {
    type: [String],
    validate:(v)=>Array.isArray(v) && v.length>0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});