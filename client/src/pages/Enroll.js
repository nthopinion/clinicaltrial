import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Enroll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await window.fetch("http://localhost:8000/users");
      setUsers(await results.json());
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Enrollment</h1>
      <Container>
        <Row xs={6}>
          <Col>
            <ul>
              {users.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
