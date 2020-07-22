import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row, Form, Toast } from "react-bootstrap";
import { EnrollStep1 } from "./../components/EnrollStep1";
import { EnrollStep2 } from "./../components/EnrollStep2";
import { EnrollProvider } from "../providers/enrollProvider";
import { AppContext } from "./../providers/AppContext";
import moment from "moment";
import config from "../config";
import { useHistory } from "react-router-dom";

export const Enroll = () => {
  const appContext = useContext(AppContext);
  const [index, setIndex] = useState(() => 1);
  const [data, setData] = useState(() => {});
  const [enrollmentDb, setEnrollmentDb] = useState();
  const [appId, setAppId] = useState();
  const [show, setShow] = useState(false);
  let history = useHistory();

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
    const getEnrollmentData = async () => {
      let db = await appContext.getEnrollmentDb();
      setEnrollmentDb(db);
      let enrolmentRows = await db.getMany();
      if (enrolmentRows.length > 0) {
        setData(enrolmentRows[0]);
        getAppId(enrolmentRows[0]);
      }
    };
    getEnrollmentData();
  }, [appContext]);

  const getAppId = async (enrollmentData) => {
    const response = await fetch(
      `${config.domainURL}/api/enrollmentId?id=` + enrollmentData._id,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const { id } = await response.json();
    setAppId(id);
  };
  const enrollData = {
    data: data || {},
    onHandleInput: handleInput,
    onNextClick: next,
    onPrevClick: prev,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveData();
  };

  const saveData = async () => {
    await enrollmentDb.save(data);
    data.id = appId;
    if (!Array.isArray(enrollmentDb.errors)) {
      const response = await fetch(`${config.domainURL}/api/saveEnrollment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const enrollment = await response.json();
      setShow(true);
      setTimeout(() => {
        history.go();
      }, 2000);
    }
  };

  const logout = async () => {
    await appContext.logout();
    history.push("login");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Enrollment</h2>
        <button class="btn btn-link float-right mr-4" onClick={logout}>
          Logout
        </button>
      </div>
      <div></div>
      <Container className="mt-3">
        <Row xs={10}>
          <Col>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={5000}
              autohide
            >
              <Toast.Body>Enrollment Data saved successfully.</Toast.Body>
            </Toast>
            <Form onSubmit={handleSubmit}>
              <EnrollProvider value={enrollData}>
                {index === 1 && <EnrollStep1 />}
                {index === 2 && <EnrollStep2 />}
              </EnrollProvider>
            </Form>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};
