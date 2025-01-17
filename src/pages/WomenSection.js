import React, { useState, useEffect, useRef } from "react";
import "./Men.css"; // Import the custom CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { shoeData } from "../components/ShoesData";
import { addToCart } from "../Redux/actions/Actions";
import { useDispatch } from "react-redux";

const MensSection = () => {
  const [selectedSizes, setSelectedSizes] = useState([]); // For filtering by size
  const [maxPrice, setMaxPrice] = useState(500); // Default max price range
  const [visibleCards, setVisibleCards] = useState([]); // Tracks visible cards

  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElements = document.querySelectorAll(".product-card-container");
    cardElements.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  const handleAddToCart = (product) => {
    if (localStorage.getItem("token")) {
      alert(`${product.name} added to cart!`);
      dispatch(addToCart(product));
    } else {
      alert("Please Login to add to cart");
    }
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size)); // Remove size if unchecked
    } else {
      setSelectedSizes([...selectedSizes, size]); // Add size if checked
    }
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Filter logic
  const filteredProducts = shoeData.filter((product) => {
    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(product.size); // Match sizes if selected
    const matchesPrice = product.price <= maxPrice; // Match price
    return matchesSize && matchesPrice;
  });

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {/* Hero Banner */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="hero-banner womenHeroBanner">
              <h1 className="display-4">Men's Collection</h1>
              <p className="lead">
                Explore the latest in sneakers, formal shoes, and more!
              </p>
              {/* <a href="#products" className="btn btn-primary btn-lg">
                Shop Now
              </a> */}
            </div>
          </div>
        </div>

        {/* Filters and Categories */}
        <div className="row mb-4">
          <div className="col-md-3">
            <h4 className="section-heading">Filters</h4>
            <div className="form-group">
              <label>Price Range: ${maxPrice}</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={handlePriceChange}
              />
            </div>
            <h5 className="section-heading">Size</h5>
            <div>
              {[6, 7, 8, 9].map((size) => (
                <div key={size}>
                  <input
                    type="checkbox"
                    id={`size${size}`}
                    value={size}
                    onChange={() => handleSizeChange(size)}
                  />
                  <label htmlFor={`size${size}`}>{size}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-md-9">
            <h4 id="products" className="section-heading">
              Products
            </h4>
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    className={`col-lg-4 col-md-6 mb-4 product-card-container ${
                      visibleCards.includes(product.id.toString())
                        ? "fade-in-up"
                        : ""
                    }`}
                    data-id={product.id}
                    key={product.id}
                  >
                    <div className="card product-card">
                      <img
                        src={product.imageURL}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No products match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MensSection;
