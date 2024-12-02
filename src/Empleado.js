import React, { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState(() =>
    JSON.parse(localStorage.getItem("employees")) || []
  );

  const addEmployee = () => {
    const name = prompt("Ingrese el nombre del empleado:");
    const department = prompt("Ingrese el departamento:");
    const newEmployee = { id: Date.now(), name, department };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="container">
      <h2>Gestión de Empleados</h2>
      <button className="btn btn-primary my-3" onClick={addEmployee}>Agregar Empleado</button>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
