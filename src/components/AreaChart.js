import React, { useState } from "react";
import ReactPolling from "react-polling";
import Chart from "react-apexcharts";
import "./styles/Chart2.css";
import moment from "moment";
import Spinner from "../components/Loading";

const Chart2 = () => {
  // eslint-disable-next-line
  const [dates, setDates] = useState([]);
  const [series, setSeries] = useState([]);
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [tooltip, setTooltip] = useState();
  const [options, setOptions] = useState({
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
      // type: "area",
    },
    title: {
      text: { title },
      align: "left",
    },
    colors: ["#5e5e5e", "#17ead9", "#f02fc2"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#41475D",
    },
    // fill: {
    //   colors: "transparent",
    //   opacity: 0.1,
    //   // type: "gradient",
    //   // gradient: {
    //   //   shade: "dark",
    //   //   type: "vertical",
    //   //   shadeIntensity: 0.5,
    //   //   gradientToColors: undefined,
    //   //   inverseColors: true,
    //   //   opacityFrom: 1,
    //   //   opacityTo: 1,
    //   //   stops: [0, 25, 100],
    //   //   colorStops: [
    //   //     [
    //   //       {
    //   //         offset: 0,
    //   //         color: "red",
    //   //         opacity: 0.2,
    //   //       },
    //   //       {
    //   //         offset: 100,
    //   //         color: "blue",
    //   //         opacity: 0.2,
    //   //       },
    //   //     ],
    //   //   ],
    //   // },
    // },
    markers: {
      size: 0,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    xaxis: {
      categories: dates,
      labels: {
        style: {
          colors: "#fff",
        },
      },
      axisTicks: {
        color: "#333",
      },
      axisBorder: {
        color: "#333",
      },
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: false,
      labels: {
        offsetX: -10,
      },
    },
    series: [],
  });
  let dataArr = [];
  let createdArr = [];

  return (
    <>
      <ReactPolling
        url={
          "https://api.thingspeak.com/channels/470875/feeds.json?api_key=3418Y1ZLI8BSNQ8W&results=10"
        }
        interval={5000} // in milliseconds(ms)
        onSuccess={(response) => {
          let data = response;
          let feeds = data.feeds;
          dataArr = [];
          createdArr = [];

          feeds.map((data, i) => {
            dataArr.push(data.field1);
            return createdArr.push(
              moment(data.created_at).format("hh:mm:ss a")
            );
          });
          setSeries([
            {
              name: "temp",
              data: dataArr,
            },
          ]);
          setOptions({
            ...options,
            xaxis: {
              categories: createdArr,
            },
          });
          setTooltip({
            ...options,
            tooltip: {
              x: {
                formatter: function () {
                  return createdArr;
                },
              },
            },
          });
          setTitle({
            ...options,
            title: {
              text: "Soil Temperature",
            },
          });
          return true;
        }}
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {
            return <></>;
          } else {
            return <></>;
          }
        }}
      />
      <Chart
        type="area"
        width="1400px"
        height="400px"
        options={options}
        series={series}
      />
    </>
  );
};

export default Chart2;
