import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AccessLogs from "./pages/AccessLogs";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Sistema</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/employees">Empleados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/access-logs">Registros</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/access-logs" element={<AccessLogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
