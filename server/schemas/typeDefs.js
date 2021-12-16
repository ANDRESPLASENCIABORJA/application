const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Passenger {
    _id: ID
    name: String
    email: String
    password: String
    rides: [Ride]
    form: [Form]
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
`;

module.exports = typeDefs;
