import { gql } from "@apollo/client";

// Query one user
export const QUERY_PASSENGER = gql`
  {
    user {
      username
      rides {
        _id
        date
        pickupZone
        dropoffZone
        billAmmount
      }
      forms {
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

//Query all rides information
export const QUERY_RIDES = gql`
  {
    rides {
      _id
      date
      pickupZone
      dropoffZone
      billAmmount
    }
  }
`;

