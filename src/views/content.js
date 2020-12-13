import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import DataCard from "../components/Card";

function content() {
  return (
    <Container fluid>
      <Row id="content-nav">
        <Col xs={12}>
          <Navigation />
        </Col>
      </Row>
      <Row id="content-body">
        <Col xs={12}>
          <DataCard />
        </Col>
      </Row>
      <Row id="content-footer">
        <Col xs={12}></Col>
      </Row>
    </Container>
  );
}

export default content;
