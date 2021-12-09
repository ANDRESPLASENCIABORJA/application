// Create the model for the passenger
// Require mongoose model and bycrypt
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const passengerSchema = new Schema({
  // To authenticate a passenger has a name
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // An email
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  // A password
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // End of authentication model

  // Form to submit and list of rides to select which ones submit
  // here extends rides model
  rides: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ride",
    },
  ],

  form: [
    {
      type: Schema.Types.ObjectId,
      ref: "Form",
    },
  ],

});

// set up pre-save middleware to create password
passengerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
passengerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Store the model passenger and expor it
const Passenger = model("Passenger", passengerSchema);

module.exports = Passenger;
