// see SignupForm.js for comments
import React, { useState, useEffect } from "react";
// Import bootstrap components
import { Form, Button, Alert } from "react-bootstrap";
// Import our mutation
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const LoginForm = (props) => {
  
  // SET THE INITIAL FORM STATE AND DEFINE THE MUTATION
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // Handle the event of the form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormState ({
      ...formState,
      [name]: value,
    })
  }

  return (
    <div className="signup-form">
      <Form onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
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
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
