// PaymentPage.js
import React, { useState } from "react";
import "./Payment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resetCartAction } from "../Redux/actions/Actions";

const PaymentPage = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
  const cart = useSelector((state) => state.cart.carts);

  const [paymentMethod, setPaymentMethod] = useState("");
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8009/api/payment", {
        cart,
        totalItems,
        totalPrice,
        paymentMethod,
      });
      alert("Payment successful! " + response.data.message);
      navigate('/order-track')
      dispatch(resetCartAction());
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="payment-page-container">
        <h1 className="text-center">Payment</h1>
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
                <p>Quantity: {product.quantity}</p>
                <p>Subtotal: ${product.price * product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: <b>${totalPrice.toFixed(2)}</b></p>

          <div className="payment-methods">
            <h4>Select Payment Method</h4>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
          </div>
          <button className="btn-checkout" onClick={handlePayment}>
            Complete Payment
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;