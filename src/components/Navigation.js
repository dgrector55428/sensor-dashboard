import React from "react";
import { Nav } from "react-bootstrap";

function navigation() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default navigation;
