import React from "react";
import { Card } from "react-bootstrap";
import DataChart from "../components/Chart";
import DataChart2 from "../components/Chart2";
import "./styles/Card.css";

const DataCard = () => {
  return (
    <>
      <Card
        className="bg-dark text-white data-card"
        style={{ marginBottom: "15px" }}
      >
        <Card.Body>
          <DataChart2 />
        </Card.Body>
      </Card>
    </>
  );
};

export default DataCard;
