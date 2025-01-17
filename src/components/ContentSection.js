import React, { useEffect, useState } from "react";
import "./Style.css";

const ContentSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <section className={`ecommerce-section py-5 ${animate ? "animate-section" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-6 ${animate ? "slide-in-left" : ""}`}>
            <h2 className="section-title conTitle">Discover Your Perfect Pair</h2>
            <p className="section-text">
              Welcome to our premium shoe store, where style meets comfort. We offer a wide range of high-quality shoes designed to elevate your fashion game. Whether you're looking for sleek sneakers, elegant heels, or durable boots, we have something for everyone.
            </p>
            <p className="section-text conText">
              Our shoes are crafted with the finest materials and designed with both fashion and functionality in mind. Step into a world of unmatched comfort and style. Browse our collection today and find the perfect pair to complement your unique style.
            </p>
            <a href="/shop" className="btn conBtn btn-lg mt-3">Shop Now</a>
          </div>
          <div className={`col-md-6 ${animate ? "slide-in-right" : ""}`}>
            <img
              src="https://www.solepodiatry.com.au/wp-content/uploads/basketball-shoe-buying-guide-blog-m.jpeg"
              alt="Shoes"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
