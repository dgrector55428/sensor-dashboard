import React from "react";
import { Card } from "react-bootstrap";
import DataChart2 from "./AreaChart";
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
