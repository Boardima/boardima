const mongoose = require("mongoose");

const geocoder = require("../utils/geocoder");
const Schema = mongoose.Schema;

const BoardimSchema = new Schema({
  boardimID: {
    type: String,
    required: [true, "Please add a boardim ID"],
    unique: true,
    trim: true,
    maxlength: [10, "Store ID must be less than 10 characters"],
  },
  ownerName: String,
  address: {
    type: String,
    required: [true, "Please add address"],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    default: 'None',
  },
  contactNumber: String,
  description: String,
  status: {
    type: String,
    enum: ['Available', 'Unavailable'],
    default: 'Available',
  },
  busUOC: {
    type: String,
  },
  busUOM: {
    type: String,
  },
  busUSJ: {
    type: String,
  },
  nearUni: {
    type: Array,
  },
  image: {
    type: [String],
    validate:(v)=>Array.isArray(v) && v.length>0,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


BoardimSchema.pre("save", async function (next) {

  const loc = await geocoder.geocode({
    address: this.address,
    country: "Sri Lanka",
  });
  console.log(loc);
  //   const res = await geocoder.reverse({
  //     lat: 6.23440922615241,
  //     lon: 80.05840520529814,
  //   });
  //   console.log(res);

  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  this.address = undefined;

  next();
});

module.exports = mongoose.model("Boardim", BoardimSchema);