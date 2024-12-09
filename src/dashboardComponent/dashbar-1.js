import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DealsChart2 = () => {
  // Line chart data
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Deals",
        data: [10, 20, 30, 15, 22, 40, 30, 20, 30, 18, 30, 60],
        borderColor: "#ff0000", // Line color
        backgroundColor: "rgba(255, 0, 0, 0.2)", // Fill area color
        fill: true, // Fill area under the line
        /* tension: 0.1, */ // Smooth curve
        borderWidth: 2, // Line thickness
        pointRadius: 0, // No points on the line
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `${value}K`, // Format Y-axis values
        },
        grid: {
          drawBorder: false, // Remove border around chart
        },
      },
      x: {
        grid: {
          display: false, // Remove grid lines
        },
      },
    },
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
      <div className="card-body">
        <h5 className="card-title d-flex align-items-center">
          <i className="bi bi-grid-3x3-gap-fill me-2"></i> Deals by Year
        </h5>
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-light border me-2">Sales Pipeline</button>
          <button className="btn btn-light border">Last 3 months</button>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DealsChart2;
