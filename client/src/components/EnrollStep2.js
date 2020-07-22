import React, { useContext } from "react";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { EnrollContext } from "./../providers/enrollProvider";

export const EnrollStep2 = () => {
  const { onHandleInput, onPrevClick, data } = useContext(EnrollContext);

  return (
    <>
      <h6>Fitness Tracker</h6>
      <Form.Row>
        <Form.Group as={Col} controlId="fitnessOptIn">
          <Form.Label></Form.Label>
          <Form.Check
            type="checkbox"
            checked={data?.fitnessOptIn === true}
            onChange={(e) => onHandleInput(e, "check")}
            label="Fitness Tracker Opt-In?"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="noSteps">
          <Form.Label>Number of steps per day</Form.Label>
          <Form.Control
            type="number"
            onChange={onHandleInput}
            placeholder="Number of steps per day"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="heartRate">
          <Form.Label>Heart rate</Form.Label>
          <Form.Control
            type="number"
            onChange={onHandleInput}
            placeholder="Heart rate"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="temperature">
          <Form.Label>Body temperature</Form.Label>
          <Form.Control
            type="number"
            onChange={onHandleInput}
            placeholder="Body temperature"
          />
        </Form.Group>
      </Form.Row>
      <h6>Parameters of respiration</h6>
      <Form.Row>
        <Form.Group as={Col} controlId="fitnessRate">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            value={data.fitnessRate}
            onChange={onHandleInput}
            placeholder="Rate"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="fitnessDepth">
          <Form.Label>Depth</Form.Label>
          <Form.Control
            type="number"
            value={data.fitnessDepth}
            onChange={onHandleInput}
            placeholder="Depth"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="fitnessIER">
          <Form.Label>Inhalation To Exhalation Ratio (IER)</Form.Label>
          <Form.Control
            type="number"
            onChange={onHandleInput}
            placeholder="Inhalation To Exhalation Ratio"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="inhalationDuration">
          <Form.Label>Durations of inhalation</Form.Label>
          <Form.Control
            type="text"
            onChange={onHandleInput}
            placeholder="Durations of inhalation"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="retention">
          <Form.Label>Retention</Form.Label>
          <Form.Control
            type="text"
            onChange={onHandleInput}
            placeholder="Retention"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="exhalationHold">
          <Form.Label>Exhalation and hold</Form.Label>
          <Form.Control
            type="text"
            onChange={onHandleInput}
            placeholder="Exhalation and hold"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="consistency">
          <Form.Label>Consistency</Form.Label>
          <Form.Control
            type="text"
            onChange={onHandleInput}
            placeholder="Consistency"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="smoothness">
          <Form.Label>Smoothness</Form.Label>
          <Form.Control
            type="text"
            onChange={onHandleInput}
            placeholder="Smoothness"
          />
        </Form.Group>
      </Form.Row>

      <button className="ml-auto btn btn-info" onClick={onPrevClick}>
        Previous
      </button>
      <button type="submit" className="ml-2 btn btn-info">
        Submit
      </button>
    </>
  );
};

EnrollStep2.propTypes = {
  prevClick: PropTypes.func,
};
