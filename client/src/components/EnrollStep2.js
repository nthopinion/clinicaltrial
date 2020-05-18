import React from "react";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const EnrollStep2 = ({ prevClick }) => {
  const prevClickHandler = () => {
    prevClick();
  };

  return (
    <>
      <h6>Fitness Tracker</h6>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formFitnessOptIn">
            <Form.Label></Form.Label>
            <Form.Check type="checkbox" label="Fitness Tracker Opt-In?" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessNoSteps">
            <Form.Label>Number of steps per day</Form.Label>
            <Form.Control type="number" placeholder="Number of steps per day" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessHeartRate">
            <Form.Label>Heart rate</Form.Label>
            <Form.Control type="number" placeholder="Heart rate" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessTemp">
            <Form.Label>Body temperature</Form.Label>
            <Form.Control type="number" placeholder="Body temperature" />
          </Form.Group>
        </Form.Row>
        <h6>Parameters of respiration</h6>
        <Form.Row>
          <Form.Group as={Col} controlId="formFitnessRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" placeholder="Rate" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessDepth">
            <Form.Label>Depth</Form.Label>
            <Form.Control type="number" placeholder="Depth" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessIER">
            <Form.Label>Inhalation To Exhalation Ratio (IER)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Inhalation To Exhalation Ratio"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Durations of inhalation</Form.Label>
            <Form.Control type="email" placeholder="Enrollment Date" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formFitnessRetention">
            <Form.Label>Retention</Form.Label>
            <Form.Control type="text" placeholder="Retention" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessExHold">
            <Form.Label>Exhalation and hold</Form.Label>
            <Form.Control type="text" placeholder="Exhalation and hold" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessConsistency">
            <Form.Label>Consistency</Form.Label>
            <Form.Control type="text" placeholder="Consistency" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFitnessSmoothness">
            <Form.Label>Smoothness</Form.Label>
            <Form.Control type="text" placeholder="Smoothness" />
          </Form.Group>
        </Form.Row>
      </Form>

      <button className="mr-auto btn btn-info" onClick={prevClickHandler}>
        Prev
      </button>
    </>
  );
};

EnrollStep2.propTypes = {
  prevClick: PropTypes.func,
};
