const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Passenger {
    _id: ID
    username: String
    email: String
    password: String
    rides: [Ride]
    forms: [Form]
  }

  type Form {
    _id: ID
    companyName: String
    taxPayerNumber: Int
    rides: [Ride]
  }

  type Ride {
    _id: ID
    date: String
    pickupZone: String
    dropoffZone: String
    billAmmount: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    passenger: Passenger
  }

  # Deal with the querys of the application
  type Query {
    passengers: [Passenger]
    rides: [Ride]
    forms: [Form]
    me: Passenger
    ride(_id: ID!): Ride
    form(_id: ID!): Form
  }

  # Deal with the Mutations of the application
  type Mutation {
    login(email: String!, password: String!): Auth
    addPassenger(username: String!, email: String!, password: String!): Auth
    updatePassenger(username: String, email: String, password: String): Passenger
    addForm(companyName: String, taxPayerNumber: Int, rides: String): Form
  }
`;

module.exports = typeDefs;
