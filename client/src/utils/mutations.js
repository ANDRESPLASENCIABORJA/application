import { gql } from '@apollo/client';

export const LOGIN_PASSENGER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_PASSENGER = gql`
  mutation addPassenger($username: String!, $email: String!, $password: String!) {
    addPassenger(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FORM = gql`
  mutation addOrder($forms: [ID]!) {
    addForm(forms: $forms) {
      forms {
        _id
        companyName
        taxPayerNumber
        rides {
          date
          pickupZone
          dropoffZone
          billAmmount
        }
      }
    }
  }
`;
