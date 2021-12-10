const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Passenger {
    _id: ID
    name: String
    email: String
    password: String
    rides: [String]!
    form: [String]!
  }

  type Ride {
    _id: ID
    date: Date
    pickupZone: String
    dropoffZone: String
    billAmmount: Number
  }

  type Form {
    _id: ID
    companyName: String
    taxPayerNumber: Number
    rides: [String]!
  }

  type Auth {
    token: ID!
    passenger: Passenger
  }

  type Query {
    passengers: [Passenger]!
    passenger(passengerId: ID!): Passenger
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Passenger
    rides: (passengerId: ID!): Passenger
    forms: (passengerId: ID!): Passenger
  }

  type Mutation {
    addPassenger(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updatePassenger(
      firstName: String
      lastName: String
      email: String
      password: String
    ): Passenger

    login(email: String!, password: String!): Auth

    addForm(
      _id: ID
      companyName: String
      taxPayerNumber: Number
      rides: [Ride]!
    ): Passenger
  }
`;

module.exports = typeDefs;
