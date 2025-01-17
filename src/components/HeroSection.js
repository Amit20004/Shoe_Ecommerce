import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://files.oaiusercontent.com/file-RvzpnKWhYHgTZKo1DkGeRZ?se=2025-01-11T15%3A08%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D37899258-edde-4a8d-bff6-b29a79558361.webp&sig=c6dP9CiZFTzdyYfGAxqrlMGZVma8JzJ4CU5dhj7ibSM%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        textAlign: "center",
        borderBottom: "2px solid #f0f0f0",
        position: "relative",
        animation: animate ? "slideIn 1s ease-out" : "none",
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Welcome to Our Store
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#fff",
            marginBottom: "30px",
          }}
        >
          Discover exclusive deals and premium products crafted just for you!
        </p>
        <a
          href="/shop"
          style={{
            backgroundColor: "rgb(244, 86, 8)",
            color: "white",
            padding: "12px 30px",
            borderRadius: "5px",
            fontSize: "1rem",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
          className="cta-btn"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
