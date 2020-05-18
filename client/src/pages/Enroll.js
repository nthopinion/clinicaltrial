import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EnrollStep1 } from "./../components/EnrollStep1";
import { EnrollStep2 } from "./../components/EnrollStep2";

export const Enroll = () => {
  const [index, setIndex] = useState(() => 1);
  // const [data, setData] = useReducer(
  //   // (state, newState) => ({ ...state, ...newState }),// will not work in IE 11.
  //   (state, newState) => Object.assign(state, newState),
  //   {}
  // );

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

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Enrollment</h2>
      </div>
      <Container className="mt-3">
        <Row xs={10}>
          <Col>
            {index === 1 && <EnrollStep1 nextClick={next} />}
            {index === 2 && <EnrollStep2 prevClick={prev} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};
