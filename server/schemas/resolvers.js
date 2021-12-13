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

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Let's query all the forms
    rides: async () => {
      return Ride.find({});
    },

    forms: async () => {
      return Form.find();
    },
  },

};

module.exports = resolvers;

