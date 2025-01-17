import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <div
      className={`mt-5 container promo-banner ${animate ? "slide-in-top" : ""}`}
      style={{
        backgroundColor: "#f8f9fa",
        padding: "30px 20px",
        textAlign: "center",
        borderRadius: "2px",
        border: "1px solid #e0e0e0",
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Limited Time Offer!
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Get{" "}
          <span style={{ color: "#007bff", fontWeight: "bold" }}>50% OFF</span>{" "}
          on your first order. Hurry, the offer ends soon!
        </p>
        <Link
          to="/sale"
          style={{
            backgroundColor: "#00bff",
            color: "orange",
            padding: "12px 30px",
            borderRadius: "5px",
            fontSize: "1rem",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          className="promo-btn"
        >
          Claim Your Offer
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
