// This page is the same of OrderHistory because here we are storing the assets that the user has

// Import react dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import the query that we are going to use, in this case is QUERY_USER
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Import Bootstrapp dependencies
import { Card, Row, Col, Button, ListGroup, Table } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

// Import background image
import World from "../images/worlds.jpg";

const Profile = () => {
  // Store the query on a constant
  const { data } = useQuery(QUERY_USER);
  // Store the user itself on a variable
  let user;

  // If the user has data to show then show it (order history)
  // If the user has data then sow me that data
  if (data) {
    user = data.user;
  }

  return (
    <main>
      <section
        className="card-first-profile container-fluid"
        style={{
          backgroundImage: `url(${World})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Table responsive="sm">
          <thead>
            <tr>
              <th>
                <MDBIcon icon="user-astronaut" size="2x" />
              </th>
              <th style={{ paddingLeft: 85, fontSize: "larger" }}>User</th>
              <th style={{ paddingLeft: 85, fontSize: "larger" }}>Portfolio</th>
              <th style={{ fontSize: "larger" }}>Balance: $</th>
            </tr>
          </thead>
        </Table>
      </section>

      {/* Ternary operator that will tell us of the user has data then show it */}

      {user ? (
        <section className="widgets" style={{ backgroundColor: "black" }}>
          <h2 className="text-center">{user.username}OPEN TRADES</h2>

          {/* Get the orders information */}
          {user.orders.map((order) => (
            <div key={order._id}>
              <Row xs={1} md={2} className="g-4">
                <Col>
                  {order.assets.map(({ _id, name, ticker, price }, index) => (
                    <div key={index}>
                      <Link to={`/assets/${_id}`}>
                        <Card bg={"dark"} text={"white"} className="mb-3">
                          <Card.Body>
                            <Card.Title className="text-center">
                              {name}
                            </Card.Title>
                            {/* Map the assets information */}
                            <Card.Text>
                              <ListGroup>
                                <ListGroup.Item variant="info">
                                  Ticker: {ticker}
                                </ListGroup.Item>
                                <ListGroup.Item variant="danger">
                                  Price:{price}
                                </ListGroup.Item>
                                <ListGroup.Item
                                  action
                                  href="#link1"
                                  variant="primary"
                                >
                                  Chart
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Text>
                            <Button className="text-center">Sell</Button>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          ))}
        </section>
      ) : null}
    </main>
  );
};

// Export the footer
export default Profile;
