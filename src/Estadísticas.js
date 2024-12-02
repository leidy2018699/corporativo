import React from "react";
import { Bar } from "react-chartjs-2";

const Statistics = ({ data }) => {
  const chartData = {
    labels: ["7:00 AM", "7:30 AM"],
    datasets: [
      {
        label: "Empleados",
        data: data,
        backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
      },
    ],
  };

  return (
    <div className="container">
      <h2>Estadísticas de Empleados</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Statistics;
