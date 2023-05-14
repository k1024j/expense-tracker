import React from "react";
import "./Chart.css";
import Chartbar from "./Chartbar";

export default function Chart({ chartDataPoints }) {
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {chartDataPoints.map((datapoint) => (
        <Chartbar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}
