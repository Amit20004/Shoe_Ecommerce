import React from "react";
import "./Payment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementQuantityAction, decrementQuantityAction } from "../Redux/actions/Actions";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch cart from Redux store
  const cart = useSelector((state) => state.cart.carts);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <Navbar />
      <div className="payment-page-container">
        <h1 className="text-center">Checkout</h1>
        <div className="product-list">
          {cart.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.imageURL}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div className="quantity-control">
                  <button
                    className="btn-quantity"
                    onClick={() => dispatch(decrementQuantityAction(product.id))}
                  >
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    className="btn-quantity"
                    onClick={() => dispatch(incrementQuantityAction(product.id))}
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: ${product.price * product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <p>Total Items: {cart.reduce((acc, product) => acc + product.quantity, 0)}</p>
          <p>
            Total Price: <b>${totalPrice.toFixed(2)}</b>
          </p>
          <button className="btn-checkout" onClick={handlePayment}>Proceed to Payment</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOutPage;
