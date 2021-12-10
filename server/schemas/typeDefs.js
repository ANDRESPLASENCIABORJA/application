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
    passenger: Passenger
    ride: [Ride]
    form: Form
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    login(email: String!, password: String!): Auth

    addForm(
      _id: ID
      companyName: String
      taxPayerNumber: Number
      rides: [String]!
    ): Passenger
  }
`;

module.exports = typeDefs;

