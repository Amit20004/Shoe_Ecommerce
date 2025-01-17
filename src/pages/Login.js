// src/components/Login.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    setError("Please enter both email and password.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:8009/api/login", {
      email,
      password,
    });
    console.log("Login Successful:", response.data);

    // Store the JWT in localStorage or cookies
    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
    window.location.href = "/";
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    setError(
      error.response?.data.message || "Login failed. Please try again."
    );
  }
};


  return (
    <>
      <Navbar />
      <div className="container-fluid loginbg">
        <div className="row justify-content-center">
          <div className="col-md-12 login-container w-full">
            <div className="card loginBG">
              <div className="card-body">
                <h2 className="text-center mb-4 text-black">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit} className="text-black">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className=" d-flex justify-content-around align-items-center">
                    <button type="submit" className="btn btn-primary w-50 mt-3">
                      Login
                    </button>
                  </div>{" "}
                  <div className="text-center mt-3">
                    <small>
                      New user? <Link to="/signup" className="text-primary">Sign up</Link>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
