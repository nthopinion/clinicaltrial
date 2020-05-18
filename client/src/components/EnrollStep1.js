import React from "react";
import { Form, Col } from "react-bootstrap";
import "../Datetime.css";
import Datetime from "react-datetime";
import PropTypes from "prop-types";

export const EnrollStep1 = ({ nextClick }) => {
  const nextClickHandler = () => {
    nextClick();
  };

  return (
    <>
      <h6>Demographics</h6>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formEnrollmentDate">
            <Form.Label>Enrollment Date</Form.Label>
            <Datetime
              placeholder="Enrollment Date"
              closeOnSelect={true}
              inputProps={{ placeholder: "Enrollment Date" }}
            ></Datetime>
          </Form.Group>

          <Form.Group as={Col} controlId="formConsentDate">
            <Form.Label>Consent Date</Form.Label>
            <Datetime
              placeholder="Consent Date"
              closeOnSelect={true}
              inputProps={{ placeholder: "Consent Date" }}
            ></Datetime>
          </Form.Group>
          <Form.Group as={Col} controlId="formAdmissionDate">
            <Form.Label>Admission Date</Form.Label>
            <Datetime
              placeholder="Admission Date"
              closeOnSelect={true}
              inputProps={{ placeholder: "Admission Date" }}
            ></Datetime>
          </Form.Group>

          <Form.Group as={Col} controlId="formVisitDate">
            <Form.Label>Visit Date</Form.Label>
            <Datetime
              placeholder="Visit Date"
              closeOnSelect={true}
              inputProps={{ placeholder: "Visit Date" }}
            ></Datetime>
          </Form.Group>
        </Form.Row>
        {/* 2nd row */}
        <Form.Row>
          <Form.Group as={Col} controlId="formDischargeDate">
            <Form.Label>Discharge Date</Form.Label>
            <Datetime
              placeholder="Discharge Date"
              closeOnSelect={true}
              inputProps={{ placeholder: "Discharge Date" }}
            ></Datetime>
          </Form.Group>

          <Form.Group as={Col} controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" />
          </Form.Group>
          <Form.Group as={Col} controlId="formWeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" placeholder="Weight" />
          </Form.Group>
          <Form.Group as={Col} controlId="formHeight">
            <Form.Label>Height (in cm)</Form.Label>
            <Form.Control type="number" placeholder="Height" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGenderReassigned">
            <Form.Label></Form.Label>
            <Form.Check
              className="mt-2"
              type="checkbox"
              label="Gender Reassigned?"
            />
          </Form.Group>
        </Form.Row>
        <h6>Medication Prescription</h6>
        <Form.Row>
          <Form.Group as={Col} controlId="formMedPrescName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedPrescDose">
            <Form.Label>Dose</Form.Label>
            <Form.Control type="number" placeholder="Dose" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedPrescUnits">
            <Form.Label>Units</Form.Label>
            <Form.Control type="text" placeholder="Units" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formMedPrescFrequency">
            <Form.Label>Frequency</Form.Label>
            <Form.Control type="text" placeholder="Frequency" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedPrescPrescriber">
            <Form.Label>Prescriber</Form.Label>
            <Form.Control type="text" placeholder="Prescriber" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedPrescOptions">
            <Form.Label> </Form.Label>
            <Form.Control as="select" className="mt-2">
              <option>Home</option>
              <option>Home Med Continued</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <h6>Medication OTC</h6>
        <Form.Row>
          <Form.Group as={Col} controlId="formMedOTCName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedOTCDose">
            <Form.Label>Dose</Form.Label>
            <Form.Control type="number" placeholder="Dose" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedOTCUnits">
            <Form.Label>Units</Form.Label>
            <Form.Control type="text" placeholder="Units" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formMedOTCFrequency">
            <Form.Label>Frequency</Form.Label>
            <Form.Control type="text" placeholder="Frequency" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedOTCPrescriber">
            <Form.Label>Prescriber</Form.Label>
            <Form.Control type="text" placeholder="Prescriber" />
          </Form.Group>
          <Form.Group as={Col} controlId="formMedOTCOptions">
            <Form.Label> </Form.Label>
            <Form.Control as="select" className="mt-2">
              <option>Home</option>
              <option>Home Med Continued</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>

          <Form.Group as={Col} controlId="formState">
            <Form.Label>State/Territory/Providence</Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group as={Col} controlId="formZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Form.Group>

          <Form.Group as={Col} controlId="formRecruitment">
            <Form.Label>Recruitment</Form.Label>
            <Form.Control type="text" placeholder="Recruitment" />
          </Form.Group>
        </Form.Row>
      </Form>

      <button className="ml-auto btn btn-info" onClick={nextClickHandler}>
        Next
      </button>
    </>
  );
};

EnrollStep1.propTypes = {
  nextClick: PropTypes.func,
};
