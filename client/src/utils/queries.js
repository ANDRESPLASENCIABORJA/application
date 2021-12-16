import { gql } from "@apollo/client";

// Query one asset information
export const QUERY_ASSETS = gql`
  query getProducts($category: ID) {
    assets(category: $category) {
      _id
      name
      ticker
      price
      quantity
      category {
        _id
      }
    }
  }
`;

//Query all assets information
export const QUERY_ALL_ASSETS = gql`
  {
    assets {
      _id
      name
      ticker
      price
      quantity
      category {
        name
      }
    }
  }
`;

// Query all categories
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// Query one user
export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        assets {
          _id
          name
          ticker
          price
          quantity
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($assets: [ID]!) {
    checkout(assets: $assets) {
      session
    }
  }
`;