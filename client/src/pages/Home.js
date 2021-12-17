// Lets start with Link basic header
// We have to import react
import React, { useState, useEffect } from "react";

// Then import the bs components
import Card from "react-bootstrap/Card";
import { MDBCol, MDBIcon } from "mdbreact";

// Import useQuery and use mutation frmo apollo server
import { useQuery } from "@apollo/client";


// Import the stock values to add them to the cards
import { QUERY_RIDES } from "../utils/queries";

// Add a constant destructuring the stocks information that we want to use

// Import authentication
// import Auth from "../utils/auth";

const Home = () => {
  // Add code to query data, i wat to query in this case the stocks info of the user so is going to be query me
  const { loading, data } = useQuery(QUERY_RIDES);

  // const assets = data?.assets || [];

  return (
    <main>
      <section className="home-main-section">
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          {/* <Card.Img src={Mountain} alt="Card image" /> */}
          <Card.ImgOverlay className="card-first">
            <Card.Title>
              Investing is the first step to achieve financial freedom
            </Card.Title>
            <Card.Text>Take a look at our Stocks</Card.Text>
            <MDBCol md="4">
              <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </MDBCol>
          </Card.ImgOverlay>
        </Card>
      </section>

      {/* <section className="widgets" style={{ backgroundColor: "black" }}>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <AssetList
              assets={assets}
              title="Here's the current roster of friends..."
            />
          )}
      </section> */}
    </main>
  );
};
// Export the footer
export default Home;
