import React, { useEffect, useState } from "react";
import studentStyle from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const StudentOperations = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend10am.onrender.com/student`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteData = (userid) => {
    axios
      .delete(`https://backend10am.onrender.com/student/${userid}`)
      .then((res) => {
        alert("Data Deleted Succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className="">
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
                      <th scope="col">Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.map((stu) => {
                      return (
                        <tr key={stu._id}>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-3"
                              onClick={() => deleteData(stu._id)}
                            >
                              Delete
                            </button>

                            <NavLink to={`/editstu/${stu._id}`}>
                              <button className="btn btn-warning">Edit</button>
                            </NavLink>
                          </td>
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

export default StudentOperations;
