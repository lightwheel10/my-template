"use client";

import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const barData = {
  labels,
  datasets: [
    {
      label: 'User Growth',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const lineData = {
  labels,
  datasets: [
    {
      label: 'Revenue Trend',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={barData} />;
}

export function LineChart() {
  return <Line options={options} data={lineData} />;
}