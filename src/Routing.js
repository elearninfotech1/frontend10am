import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentData from "./Student/StudentData";
import AddStudent from "./Student/AddStudent";
import StudentOperations from "./Student/StudentOperations";
import EditStudent from "./Student/EditStudent";
import AddEmployee from "./Employee/AddEmployee";
import EmployeeData from "./Employee/EmployeeData";
import Signup from "./Signup/Signup";
import Login from "./Signup/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import AddStu from "./Student/AddStu";
import StuData from "./Student/StuData";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StuData />} />
        <Route path="/addstudent" element={<AddStu />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<StudentData />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="deletestudent" element={<StudentOperations />} />
          <Route path="editstudent" element={<StudentOperations />} />
          <Route path="editstu/:id" element={<EditStudent />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="employeedata" element={<EmployeeData />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
