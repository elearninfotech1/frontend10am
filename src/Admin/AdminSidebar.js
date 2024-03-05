import React from "react";
import { NavLink } from "react-router-dom";
import studentStyle from "./student.module.css";
const AdminSidebar = () => {
  return (
    <div className={studentStyle.admin}>
      <ul>
        <li>
          <NavLink to="">Student Data</NavLink>
        </li>
        <li>
          <NavLink to="addstudent">Add Student</NavLink>
        </li>
        <li>
          <NavLink to="deletestudent">Delete Student</NavLink>
        </li>
        <li>
          <NavLink to="editstudent">Edit Student</NavLink>
        </li>
        <li>
          <NavLink to="addemployee">Add Employee</NavLink>
        </li>
        <li>
          <NavLink to="/employeedata">Employee Data</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
