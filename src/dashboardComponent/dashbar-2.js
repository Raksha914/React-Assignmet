import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart Component
const HorizontalBarChart = ({ title, data, color }) => {
  const chartData = {
    labels: ["Conversation", "Follow Up", "Inpipeline"],
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Makes the chart horizontal
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      title: { display: true, text: title },
    },
    scales: {
      x: { beginAtZero: true, max: 500 },
      y: { title: { display: true, text: "Stages" } },
    },
  };

  return <Bar data={chartData} options={options} />;
};

// Main App Component
const App = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Leads By Stage Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Leads By Stage</h5>
                <div>
                  <button className="btn btn-outline-secondary btn-sm">
                    Marketing Pipeline
                  </button>
                  <button className="btn btn-outline-secondary btn-sm ms-2">
                    Last 3 months
                  </button>
                </div>
              </div>
              <HorizontalBarChart
                title="Leads By Stage"
                data={[400, 300, 450]}
                color="rgba(255, 99, 132, 0.8)" // Red color
              />
            </div>
          </div>
        </div>

        {/* Won Deals Stage Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Won Deals Stage</h5>
                <div>
                  <button className="btn btn-outline-secondary btn-sm">
                    Marketing Pipeline
                  </button>
                  <button className="btn btn-outline-secondary btn-sm ms-2">
                    Last 3 months
                  </button>
                </div>
              </div>
              <HorizontalBarChart
                title="Won Deals Stage"
                data={[380, 250, 400]}
                color="rgba(75, 192, 192, 0.8)" // Green color
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
