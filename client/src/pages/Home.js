import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "./../providers/AppContext";
export const Home = () => {
  let appContext = useContext(AppContext);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Clinical Trial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="mr-2" to="/login">
              Login
            </Link>
            {appContext.isAuthenticated() && (
              <Link className="mr-2" to="/login">
                Log Out
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
