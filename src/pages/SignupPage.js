import React, { useState } from "react";
import "./SignupPage.css"; // Import the CSS file
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8009/api/signup", formData);
      console.log("Signup Successful:", response.data);
      alert("Signup successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate('/login');
    } catch (error) {
      if(error.status==400)
      {
        alert("user already exists");
      }
      console.error("Error during signup:", error.response.data);
      alert("Signup failed!");
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="container-fluid signupmainBg">
        <div className="row justify-content-center">
          <div className="col-md-6 signup-container">
            <div className="card signupBg">
              <div className="card-body">
                <h2
                  className="card-title text-center"
                  style={{ color: "black" }}
                >
                  Signup
                </h2>
                <form onSubmit={handleSubmit} className="text-black">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="enter first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="enter last name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="enter email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="enter password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="confirm password"
                    />
                  </div>
                 <div className="w-full d-flex justify-content-center align-items-center">
                 <button
                    type="submit"
                    className="btn btn-primary btn-block btn-hover w-25"
                    style={{margin:"auto"}}
                  >
                    Signup
                  </button>
                 </div>
                  <div className="text-center mt-3">
                    <small>
                      Already a user? <Link to="/login" className="text-primary">login </Link>
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

export default SignupPage;
