// OrderTrackingPage.js
import React from "react";
import "./OrderTracking.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrderTrackingPage = () => {
  const steps = [
    { step: "Order Placed", completed: true },
    { step: "Processing", completed: true },
    { step: "Shipped", completed: false },
    { step: "Out for Delivery", completed: false },
    { step: "Delivered", completed: false },
  ];

  return (
    <>
      <Navbar />
      <div className="order-tracking-container">
        <h1 className="text-center">Track Your Order</h1>
        <div className="progress-container">
          {steps.map((step, index) => (
            <div className={`progress-step ${step.completed ? "completed" : ""}`} key={index}>
              <div className="step-icon">{step.completed ? "✓" : index + 1}</div>
              <p>{step.step}</p>
              {index < steps.length - 1 && <div className="progress-bar"></div>}
            </div>
          ))}
        </div>
        <div className="status-message">
          <h3>
            Current Status: <span>{steps.find(step => !step.completed)?.step || "Delivered"}</span>
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderTrackingPage;