import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import "./styles/Chart.css";
const options = {
  chart: {
    id: "line",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: " #fff",
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
};
const series = [
  {
    name: "series-1",
    data: [18, 48, 78, 78, 58, 38, 18],
  },
];

const DataChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.thingspeak.com/channels/470875/feeds.json?api_key=3418Y1ZLI8BSNQ8W&results=2"
      )
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" width="500px" />
        </div>
      </div>
    </div>
  );
};

export default DataChart;
