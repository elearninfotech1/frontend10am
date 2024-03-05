import React from "react";
import { NavLink } from "react-router-dom";
import headerStyle from "./header.module.css";
const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.topheader}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="mb-0">
                <li>
                  <NavLink to="tel:+91 9133102210">+91 9133102210</NavLink>
                </li>
                <li>
                  <NavLink to="mailto:info@elearninfotech.com">
                    info@elearninfotech.com
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <NavLink
                to=""
                className={`btn btn-success ${headerStyle.headerbutton}`}
              >
                Support
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h2>Elearn Infotech</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addstudent">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/deletestudent">
                  Delete Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/editstudent">
                  Edit Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addemployee">
                  Add Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeedata">
                  Employee Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
