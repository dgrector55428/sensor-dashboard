import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import DataCard from "../components/Card";
import "./styles/content.css";

function content() {
  return (
    <>
      <Row id="content-nav">
        <Col xs={12}>
          <Navigation />
        </Col>
      </Row>
      <Row id="content-body">
        <Col md="auto">
          <DataCard />
        </Col>
      </Row>
      <Row id="content-footer">
        <Col xs={12}></Col>
      </Row>
    </>
  );
}

export default content;
