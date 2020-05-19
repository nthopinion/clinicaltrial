import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { EnrollStep1 } from "./../components/EnrollStep1";
import { EnrollStep2 } from "./../components/EnrollStep2";
import { EnrollProvider } from "../providers/enrollProvider";
import moment from "moment";

export const Enroll = () => {
  const [index, setIndex] = useState(() => 1);
  const [data, setData] = useState(() => {});

  const next = () => {
    if (index === 2) {
      return;
    }
    setIndex((index) => index + 1);
  };

  const prev = () => {
    if (index === 1) {
      return;
    }
    setIndex((index) => index - 1);
  };

  const handleInput = (e, type, ctrlName) => {
    let value =
      type === "check"
        ? e.target.checked
        : type === "date"
        ? moment(e).toDate()
        : e.target.value;
    let name = type === "date" ? ctrlName : e.target.id;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    console.log(data);
  });

  const enrollData = {
    onHandleInput: handleInput,
    onNextClick: next,
    onPrevClick: prev,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Enrollment</h2>
      </div>
      <Container className="mt-3">
        <Row xs={10}>
          <Col>
            <Form onSubmit={handleSubmit}>
              <EnrollProvider value={enrollData}>
                {index === 1 && <EnrollStep1 />}
                {index === 2 && <EnrollStep2 />}
              </EnrollProvider>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
