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

  Mutation: {
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await Passenger.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError(
          "No passenger found with this email address"
        );
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addPassenger: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await Passenger.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    updatePassenger: async (parent, args, context) => {
      if (context.user) {
        return await Passenger.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    addForm: async (parent, { forms }, context) => {
      console.log(context);
      if (context.user) {
        const form = new Form({ form });

        await Passenger.findByIdAndUpdate(context.user._id, { $push: { forms: form } });

        return form;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
