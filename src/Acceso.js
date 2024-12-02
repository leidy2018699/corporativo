import React, { useState } from "react";

const AccessLogs = () => {
  const [logs, setLogs] = useState(() =>
    JSON.parse(localStorage.getItem("accessLogs")) || []
  );

  return (
    <div className="container">
      <h2>Registros de Acceso</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Hora de Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.employeeName}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessLogs;
