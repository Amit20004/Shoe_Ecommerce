import React from "react";
import { useParams } from "react-router-dom";
import { shoeData } from "../components/ShoesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { delToCart } from "../Redux/actions/Actions";
import "./CardDetail.css";
import { useNavigate } from "react-router-dom";

const CardDetail = () => {
  const navigate=useNavigate();
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = shoeData.find((item) => item.id === parseInt(id));

  // Check if the product is in the cart
  const isInCart = cart.some((cartItem) => cartItem.id === product?.id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="no-items-container">
          <h2>No items to show details</h2>
        </div>
        <Footer />
      </>
    );
  }
  if (cart.length==0) {
    return (
      <>
        <Navbar />
        <div className="no-items-container">
          <h2>No items to show details</h2>
        </div>
        <Footer />
      </>
    );
  }

  const handleTrashClick = () => {
    if (isInCart) {
      dispatch(delToCart(product.id));
      alert(`${product.name} has been removed from your cart.`);
      navigate('/cart')
    } else {
      alert(`${product.name} is not in your cart.`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="card-detail-container">
        <div className="card-detail">
          <img
            src={product.imageURL}
            alt={product.name}
            className="card-detail-image"
          />
          <div className="card-detail-content">
            <h1 className="card-detail-brand">{product.brand}</h1>
            <h5 className="card-detail-title">{product.name}</h5>
            <p className="card-detail-price">Price: ${product.price}</p>
            <p className="card-detail-size">Size: {product.size}</p>
            <p className="card-detail-description">
              This is an exclusive pair of {product.name}. Perfect for every
              occasion and designed with comfort in mind.
            </p>
            <button
              className="btn btn-danger trash-button cursor-pointer"
              onClick={handleTrashClick}
            >
              Trash
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardDetail;
