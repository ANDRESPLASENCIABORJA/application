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

  type Auth {
    token: ID!
    passenger: Passenger
  }

  # Deal with the querys of the application
  type Query {
    passengers: [Passenger]
    me: Passenger
    rides: [Ride]
    forms: [Form]
  }
`;

module.exports = typeDefs;
