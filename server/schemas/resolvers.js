// constant to Handle any authentication error
const { AuthenticationError } = require("apollo-server-express");
// Require our models
const { Passenger, Ride, Form } = require("../models");
// Require the user token
const { signToken } = require("../utils/auth");

// Let's create the resolvers to handle our typedefs
const resolvers = {
  Query: {
    // Let's query all the passenger profiles
    passengers: async () => {
      return await Passenger.find({});
    },

    // Let's query all the rides
    rides: async () => {
      return await Ride.find({});
    },

    // Let's query all the passenger profiles
    forms: async () => {
      return await Form.find({});
    },

    // Query the passenger profile
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Query one ride
    ride: async (parent, { _id }) => {
      return await Ride.findById(_id);
    },

    // Query one form
    form: async (parent, { _id }) => {
      return await Form.findById(_id);
    },
  },
};

module.exports = resolvers;
