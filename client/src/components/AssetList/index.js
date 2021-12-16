// Create a component that will hold the asset list information
import React, { useEffect } from "react";

// Import bootstrap dependencies
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";

// Import authentication
import Auth from "../../utils/auth";

const AssetList = ({assets}) => {
  if (!assets.length) {
    return <h3>No Assets Yet</h3>;
  }

  return (
    <div>
      <div >
        {assets &&
          assets.map((asset) => (
            <div key={asset._id} className="col-12 col-xl-6">
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="google" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">
                      Ticker: {asset.ticker}
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">Price:{asset.price}</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                  </>
                ) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AssetList;
