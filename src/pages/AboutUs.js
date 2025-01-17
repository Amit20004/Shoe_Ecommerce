import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <header className="about-us-header">
          <h1 className="animated-title">About Us</h1>
          <p className="animated-subtitle">
            Discover who we are and what drives us to make an impact!
          </p>
        </header>

        <section className="about-section">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
            Welcome to <span className="highlight">Shoe Haven</span>, your ultimate destination for footwear that
              combines style and comfort. Our journey began with a simple vision: to provide top-quality shoes for every
              occasion. With passion and dedication, we've grown into a trusted name in the footwear industry, serving
              thousands of happy customers worldwide.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://source.unsplash.com/600x400/?team,workplace"
              alt="Teamwork"
            />
          </div>
        </section>

        <section className="mission-vision">
          <div className="card mission">
            <h3>Our Mission</h3>
            <p>
            At Shoe Haven, we are on a mission to inspire confidence, individuality, and self-expression through our
              exceptional footwear. We believe that the right pair of shoes can transform not just your outfit, but your
              day.
            </p>
          </div>
          <div className="card vision">
            <h3>Our Vision</h3>
            <p>
            To become the leading e-commerce platform for shoes, offering a blend of timeless designs and modern
            aesthetics. We envision a world where everyone finds their perfect fit, both in shoes and in life.
            </p>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img
                src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?semt=ais_hybrid"
                alt="Team Member"
              />
              <h4>Jane Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-card">
              <img
                src="https://candyfoxstudio.com/media/no%20random.jpg"
                alt="Team Member"
              />
              <h4>John Smith</h4>
              <p>CTO</p>
            </div>
            <div className="team-card">
              <img
                src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg"
                alt="Team Member"
              />
              <h4>Emily White</h4>
              <p>Creative Director</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Customer-Centric:</strong>  Delivering exceptional experiences and prioritizing your satisfaction.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Premium materials for durable, stylish, and comfortable shoes.
            </li>
            <li>
              <strong>Relationships:</strong> Building trust and lasting connections with our customers.
            </li>
            <li>
              <strong>Excellence:</strong> Quality is at the heart of
              everything we do.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
