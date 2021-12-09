const mongoose = require("mongoose");

const { Schema } = mongoose;

const formSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },

  taxPayerNumber: {
    type: Number,
    required: true,
  },

  rides: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ride",
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
