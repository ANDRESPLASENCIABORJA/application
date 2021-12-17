// Import dependencies
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_PASSENGER } from "../utils/mutations";

// import Sign from "../images/signup.jpg";

const SignupForm = () => {
  // Set initial form state
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_PASSENGER);

  // Handle the submmission of the form
  const handleFormSubmit = async (event) => {
    //Prevent default action
    event.preventDefault();

    // Handle the response of the form when submitted
    const mutationResponse = await addUser({
      // Define the variables
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    // Get the user token
    const token = mutationResponse.data.addUser.token;
    // Make the login
    Auth.login(token);
  };

  // Handle the form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-form">
      {/* This is needed for the validation functionality above */}
      <Form onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
  
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
