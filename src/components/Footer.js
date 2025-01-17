import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Info Column */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold">Info</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Track Your Order</a></li>
              <li><a href="#!" className="text-dark">Our Blog</a></li>
              <li><a href="#!" className="text-dark">Privacy Policy</a></li>
              <li><a href="#!" className="text-dark">Shipping</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
              <li><a href="#!" className="text-dark">Help</a></li>
              <li><a href="#!" className="text-dark">Community</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold">About</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">History</a></li>
              <li><a href="#!" className="text-dark">Our Team</a></li>
              <li><a href="#!" className="text-dark">Services</a></li>
              <li><a href="#!" className="text-dark">Company</a></li>
              <li><a href="#!" className="text-dark">Manufacture</a></li>
              <li><a href="#!" className="text-dark">Wholesale</a></li>
              <li><a href="#!" className="text-dark">Retail</a></li>
            </ul>
          </div>

          {/* Women Shoes Column */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold">Women Shoes</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Track Your Order</a></li>
              <li><a href="#!" className="text-dark">Our Blog</a></li>
              <li><a href="#!" className="text-dark">Privacy Policy</a></li>
              <li><a href="#!" className="text-dark">Shipping</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
              <li><a href="#!" className="text-dark">Help</a></li>
              <li><a href="#!" className="text-dark">Community</a></li>
            </ul>
          </div>

          {/* Popular Column */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold">Popular</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Prices Drop</a></li>
              <li><a href="#!" className="text-dark">New Products</a></li>
              <li><a href="#!" className="text-dark">Best Sales</a></li>
              <li><a href="#!" className="text-dark">Stores</a></li>
              <li><a href="#!" className="text-dark">Login</a></li>
              <li><a href="#!" className="text-dark">Cart</a></li>
            </ul>
          </div>

          {/* Men's Collection Column */}
          <div className="col-md-2 col-6">
            <h6 className="fw-bold">Mens Collection</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Delivery</a></li>
              <li><a href="#!" className="text-dark">About Us</a></li>
              <li><a href="#!" className="text-dark">Shoes</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="col-md-2 col-12">
            <h6 className="fw-bold">Get In Touch</h6>
            <p className="text-muted">Stylish Online Store<br />123 Main Street, Toulouse - France</p>
            <p className="text-muted">
              Call us: <br /><a href="tel:+33800456789" className="text-dark">(+33) 800 456 789</a>
            </p>
            <p className="text-muted">
              Email: <br /><a href="mailto:contact@yourwebsite.com" className="text-dark">contact@yourwebsite.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-muted mb-0" style={{fontSize:"18px",marginBottom:"0"}}>© Copyright Stylish 2023. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
