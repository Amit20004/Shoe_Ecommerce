import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { delToCart } from "../Redux/actions/Actions";
import "./Style.css"; // Import custom CSS for animations
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(delToCart(id));
  };
  const handleCheckOut = () => {
    navigate("/checkout");
  };
  const handleNavigate = (id) => {
    navigate(`/card-detail/${id}`);

  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover table-striped cart-table">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id} className="cart-item">
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm cartBtn"
                        onClick={() => handleRemove(item.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                    <i class="fa-solid fa-eye text-center cursor-pointer" onClick={()=>handleNavigate(item.id)}></i>
                    </td>
                  </tr>
                ))}
                <tr>
                <button onClick={handleCheckOut} className="m-3">Checkout</button>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <h4>Your cart is empty!</h4>
            <p>Start adding items to see them here.</p>
            <button
              className="btn btn-primary w-25"
              onClick={() => navigate("/")}
            >Shop Now</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
