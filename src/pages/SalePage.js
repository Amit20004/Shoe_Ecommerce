import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { shoeData } from "../components/ShoesData";
import "./SalesPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, delToCart } from "../Redux/actions/Actions";
const SalePage = () => {
  // Filter shoes on sale
  const saleShoes = shoeData.filter((shoe) => shoe.onSale);
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();


  return (
    <>
      <Navbar />
      <div className="sale-page-container">
        <header className="sale-header">
          <h1>Exclusive Shoe Sale</h1>
          <p>Grab your favorite shoes at unbeatable prices!</p>
        </header>

        <div className="sale-banner">
          <h2>Up to 50% Off on Select Styles!</h2>
        </div>

        <div className="sale-products">
          {saleShoes.length > 0 ? (
            <div className="sale-grid">
              {saleShoes.map((shoe) => (
                <div className="sale-banner-card" key={shoe.id}>
                  <div className="sale-card-image-container">
                    <img
                      src={shoe.imageURL}
                      alt={shoe.name}
                      className="sale-card-image"
                    />
                  </div>
                  <div className="sale-card-details">
                    <h3>{shoe.name}</h3>
                    <p className="brand">{shoe.brand}</p>
                    <div className="price">
                      <span className="sale-price">${shoe.salePrice}</span>
                      <span className="original-price">${shoe.price}</span>
                    </div>
                    <button className="btn-add-to-cart" onClick={()=>dispatch(addToCart(shoe))}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-sale-message">
              <h3>No products on sale right now. Check back soon!</h3>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalePage;
