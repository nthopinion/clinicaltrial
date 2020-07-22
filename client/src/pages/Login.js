import React, { useContext, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { AppContext } from "./../providers/AppContext";
export const Login = () => {
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      setTimeout(() => setLoading(false), 6000);
      let loggedIn = await appContext.authenticate();
      if (loggedIn) {
        setRedirectOnLogin(true);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    } finally {
      console.log("here");
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/enroll" />}
      {loading && <h1>Loading...</h1>}
      <Container className="mt-3">
        <Row xs={10}>
          <Col>
            <Form.Row>
              <Form.Group as={Col} controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          </Col>
        </Row>
        <button className="ml-auto btn btn-info" onClick={login}>
          Login
        </button>
      </Container>
    </>
  );
};
