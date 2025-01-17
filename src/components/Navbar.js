import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Badge from "@mui/material/Badge";

import {
  faUser,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.carts);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div>
      {/* Top Bar */}
      <div className="navbar-top d-flex justify-content-between align-items-center px-3 py-2 bg-light">
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebookF} className="me-3 social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="me-3 social-icon" />
          <FontAwesomeIcon icon={faYoutube} className="me-3 social-icon" />
          <FontAwesomeIcon icon={faPinterest} className="me-3 social-icon" />
        </div>
        <div className="special-offer text-dark text-center">
          Special Offer: <span className="text-primary">Free Shipping</span> on
          all orders above $100
        </div>
        <div className="top-actions">
          <Link to={"/contact"} className="top-link">
            Contact
          </Link>
          {!localStorage.getItem("token") ? (
            <Link
              to={"/login"}
              className="top-link"
              style={{ cursor: "pointer" }}
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={handleLogout}
              className="top-link"
              style={{ cursor: "pointer" }}
            >
              Logout
            </Link>
          )}
          <Link to="/cart" className="top-link">
            <Badge badgeContent={cart.length} color="primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Badge>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="brand-title">LuxeStep</span>
            <span className="brand-subtitle">Online Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link animated-link"
                  to="/"
                  id="homeLink"
                  role="button"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animated-link" to="/men">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animated-link" to="/women">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animated-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animated-link" to="/sale">
                  Sale
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style jsx="true">{`
        /* Top Bar */
        .navbar-top {
          font-size: 14px;
        }
        .social-icon {
          color: #333;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.2);
          color: #007bff;
        }
        .top-actions a {
          margin-left: 15px;
          color: #000;
          font-weight: 500;
          text-decoration: none;
        }
        .top-actions a:hover {
          text-decoration: underline;
        }
        .special-offer {
          font-weight: bold;
        }

        /* Main Navbar */
        .navbar {
          padding: 15px 0;
        }
        .navbar-brand {
          font-family: "Cursive", sans-serif;
          font-size: 24px;
        }
        .brand-title {
          font-size: 28px;
          color: #333;
          font-weight: bold;
        }
        .brand-subtitle {
          font-size: 12px;
          margin-left: 5px;
          color: #777;
        }
        .nav-link {
          margin-right: 15px;
          font-size: 16px;
        }
        .animated-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .animated-link:hover {
          color: #007bff;
        }
        .animated-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #007bff;
          bottom: -5px;
          left: 0;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .animated-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .dropdown-item:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
