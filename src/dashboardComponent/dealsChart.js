import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DealsChart = () => {
  const data = {
    labels: ['In Pipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'],
    datasets: [
      {
        label: 'Deals by Stage',
        data: [400, 130, 248, 470, 470, 180],
        backgroundColor: '#17a2b8',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Deals By Stage',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DealsChart;
