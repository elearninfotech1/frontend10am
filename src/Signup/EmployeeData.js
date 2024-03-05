import React, { useEffect, useState } from "react";
import studentStyle from "./student.module.css";
import axios from "axios";
const EmployeeData = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend10am.onrender.com/employee`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <main>
      <section className={studentStyle.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">Employee Data</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.map((stu) => {
                      return (
                        <tr key={stu._id}>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.salary}</td>
                          <td>{stu.address}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployeeData;
