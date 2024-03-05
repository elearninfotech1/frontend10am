import React, { useState } from "react";
import studentStyle from "./student.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://backend10am.onrender.com/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Username & password");
        }
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
              <h4 className="text-center">Login</h4>
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
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
