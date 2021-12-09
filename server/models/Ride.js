const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define the model for the rides
const rideSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  pickupZone: {
    type: String,
    required: true,
  },

  dropoffZone: {
    type: String,
    required: true,
  },

  billAmmount: {
    type: Number,
    required: true,
  },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
