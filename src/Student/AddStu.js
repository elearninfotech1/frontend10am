import React, { useState } from "react";
import studentStyle from "./student.module.css";
import axios from "axios";
const AddStu = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://backend10am.onrender.com/student`, { id, name, address })
      .then((res) => {
        alert("Student Added Succ..");
        setId("");
        setName("");
        setAddress("");
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
            <div className="col-md-6">
              <form className={studentStyle.form} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="id"
                    placeholder="Id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
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

export default AddStu;
