import React, { useContext } from "react";
import { Form, Col } from "react-bootstrap";
import "../Datetime.css";
import Datetime from "react-datetime";
import PropTypes from "prop-types";
import { EnrollContext } from "./../providers/enrollProvider";
import moment from "moment";

export const EnrollStep1 = () => {
  const { onHandleInput, onNextClick, data } = useContext(EnrollContext);

  return (
    <>
      <h6>Demographics</h6>
      <Form.Row>
        <Form.Group as={Col} controlId="enrollmentDate">
          <Form.Label>Enrollment Date</Form.Label>
          <Datetime
            placeholder="Enrollment Date"
            closeOnSelect={true}
            value={data ? moment(data.enrollmentDate) : null}
            onBlur={(e) => onHandleInput(e, "date", "enrollmentDate")}
            inputProps={{ placeholder: "Enrollment Date" }}
          ></Datetime>
        </Form.Group>

        <Form.Group as={Col} controlId="consentDate">
          <Form.Label>Consent Date</Form.Label>
          <Datetime
            placeholder="Consent Date"
            closeOnSelect={true}
            value={data ? moment(data.consentDate) : null}
            onBlur={(e) => onHandleInput(e, "date", "consentDate")}
            inputProps={{ placeholder: "Consent Date" }}
          ></Datetime>
        </Form.Group>
        <Form.Group as={Col} controlId="admissionDate">
          <Form.Label>Admission Date</Form.Label>
          <Datetime
            placeholder="Admission Date"
            closeOnSelect={true}
            value={data ? moment(data.admissionDate) : null}
            onBlur={(e) => onHandleInput(e, "date", "admissionDate")}
            inputProps={{ placeholder: "Admission Date" }}
          ></Datetime>
        </Form.Group>

        <Form.Group as={Col} controlId="visitDate">
          <Form.Label>Visit Date</Form.Label>
          <Datetime
            placeholder="Visit Date"
            closeOnSelect={true}
            value={data ? moment(data.visitDate) : null}
            onBlur={(e) => onHandleInput(e, "date", "visitDate")}
            inputProps={{ placeholder: "Visit Date" }}
          ></Datetime>
        </Form.Group>
      </Form.Row>
      {/* 2nd row */}
      <Form.Row>
        <Form.Group as={Col} controlId="dischargeDate">
          <Form.Label>Discharge Date</Form.Label>
          <Datetime
            placeholder="Discharge Date"
            closeOnSelect={true}
            value={data ? moment(data.dischargeDate) : null}
            onBlur={(e) => onHandleInput(e, "date", "dischargeDate")}
            inputProps={{ placeholder: "Discharge Date" }}
          ></Datetime>
        </Form.Group>

        <Form.Group as={Col} controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            onChange={onHandleInput}
            placeholder="Age"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            value={data?.weight}
            onChange={onHandleInput}
            placeholder="Weight"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="height">
          <Form.Label>Height (in cm)</Form.Label>
          <Form.Control
            type="number"
            value={data?.height}
            onChange={onHandleInput}
            placeholder="Height"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            onChange={onHandleInput}
            value={data?.gender}
          >
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="genderReassigned">
          <Form.Label></Form.Label>
          <Form.Check
            className="mt-2"
            type="checkbox"
            checked={data?.genderReassigned === true}
            onChange={(e) => onHandleInput(e, "check")}
            label="Gender Reassigned?"
          />
        </Form.Group>
      </Form.Row>
      <h6>Medication Prescription</h6>
      <Form.Row>
        <Form.Group as={Col} controlId="medPrescName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={data?.medPrescName || ""}
            onChange={onHandleInput}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medPrescDose">
          <Form.Label>Dose</Form.Label>
          <Form.Control
            type="number"
            value={data?.medPrescDose}
            onChange={onHandleInput}
            placeholder="Dose"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medPrescUnits">
          <Form.Label>Units</Form.Label>
          <Form.Control
            type="text"
            value={data?.medPrescUnits}
            onChange={onHandleInput}
            placeholder="Units"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="medPrescFrequency">
          <Form.Label>Frequency</Form.Label>
          <Form.Control
            type="text"
            value={data?.medPrescFrequency || ""}
            onChange={onHandleInput}
            placeholder="Frequency"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medPrescPrescriber">
          <Form.Label>Prescriber</Form.Label>
          <Form.Control
            type="text"
            value={data?.medPrescPrescriber || ""}
            onChange={onHandleInput}
            placeholder="Prescriber"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medPrescOptions">
          <Form.Label> </Form.Label>
          <Form.Control
            as="select"
            className="mt-2"
            value={data?.medPrescOptions}
            onChange={onHandleInput}
          >
            <option value="home">Home</option>
            <option value="hmc">Home Med Continued</option>
            <option value="hms">Home Med Stopped</option>
            <option value="hmch">Home Med Change</option>
            <option value="nms">New Med Start</option>
            <option value="ms">Med Stop</option>
            <option value="mch">Med Change</option>
            <option value="dc">Discharge Continue</option>
            <option value="dmn">Discharge Med New</option>
            <option value="dmch">Discharge Med Change</option>
            <option value="dms">Discharge Med Stop</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <h6>Medication OTC</h6>
      <Form.Row>
        <Form.Group as={Col} controlId="medOTCName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={data?.medOTCName || ""}
            onChange={onHandleInput}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medOTCDose">
          <Form.Label>Dose</Form.Label>
          <Form.Control
            type="number"
            value={data?.medOTCDose}
            onChange={onHandleInput}
            placeholder="Dose"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medOTCUnits">
          <Form.Label>Units</Form.Label>
          <Form.Control
            type="text"
            value={data?.medOTCUnits}
            onChange={onHandleInput}
            placeholder="Units"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="medOTCFrequency">
          <Form.Label>Frequency</Form.Label>
          <Form.Control
            type="text"
            value={data?.medOTCFrequency}
            onChange={onHandleInput}
            placeholder="Frequency"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medOTCPrescriber">
          <Form.Label>Prescriber</Form.Label>
          <Form.Control
            type="text"
            value={data?.medOTCPrescriber}
            onChange={onHandleInput}
            placeholder="Prescriber"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="medOTCOptions">
          <Form.Label> </Form.Label>
          <Form.Control
            as="select"
            className="mt-2"
            value={data?.medOTCOptions}
            onChange={onHandleInput}
          >
            <option>Home</option>
            <option>Home Med Continued</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={data?.country || ""}
            onChange={onHandleInput}
            placeholder="Country"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State/Territory/Providence</Form.Label>
          <Form.Control
            type="text"
            value={data?.state || ""}
            onChange={onHandleInput}
            placeholder="State"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="number"
            value={data?.zipCode || 0}
            onChange={onHandleInput}
            placeholder="Zip Code"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="recruitment">
          <Form.Label>Recruitment</Form.Label>
          <Form.Control
            type="text"
            value={data?.recruitment || ""}
            onChange={onHandleInput}
            placeholder="Recruitment"
          />
        </Form.Group>
      </Form.Row>

      <button className="ml-auto btn btn-info" onClick={onNextClick}>
        Next
      </button>
    </>
  );
};

EnrollStep1.propTypes = {
  nextClick: PropTypes.func,
  handleInput: PropTypes.func,
};
