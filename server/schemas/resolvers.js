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
      return Passenger.find();
    },

    // Query only one passenger
    passenger: async (parent, { passengerId }) => {
      return Passenger.findOne({ _id: passengerId });
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
      return Passenger.find();
    },

    forms: async () => {
      return Passenger.find();
    },
  },

  Mutation: {
    addPassenger: async (parent, { firstName, lastName, email, password }) => {
      const profile = await Passenger.create({
        firstName,
        lastName,
        email,
        password,
      });
      const token = signToken(profile);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await Passenger.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addForm: async (parent, { passengerId, ride }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Passenger.findOneAndUpdate(
          { _id: passengerId },
          {
            $addToSet: { rides: rides },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
  },
};

module.exports = resolvers;

