import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Content from "./views/content";
import Sidebar from "./views/sidebar";

function App() {
  return (
    <div id="dashboard-container">
      <Container fluid>
        <Row>
          <Col xs={2} className="dashboard-section" id="sidebar">
            <Sidebar />
          </Col>
          <Col xs={10} className="dashboard-section" id="content">
            <Content />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
