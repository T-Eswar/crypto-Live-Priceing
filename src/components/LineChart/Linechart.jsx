import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const Linechart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const dataCopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]), // x-axis (date)
          item[1], // y-axis (price)
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      legendToggle
      options={{
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
        colors: ["#4285F4"],
      }}
    />
  );
};

export default Linechart;
