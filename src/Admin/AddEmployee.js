import React, { useState } from "react";
import studentStyle from "./student.module.css";
import axios from "axios";
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, SetSalary] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/employee`, {
        name,
        email,
        phone,
        salary,
        address,
      })
      .then((res) => {
        alert("Employee Added Succ..");
        setName("");
        setEmail("");
        setPhone("");
        SetSalary("");
        setAddress("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={studentStyle.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">Add Employee</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form className={studentStyle.form} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="salary"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => SetSalary(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddEmployee;
