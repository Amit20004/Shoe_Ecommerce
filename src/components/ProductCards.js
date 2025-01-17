import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure correct Bootstrap JS import
import { shoeData } from "./ShoesData";
import { addToCart,delToCart } from "../Redux/actions/Actions";
import { useSelector,useDispatch } from "react-redux";
const slidesToShow = 4;

const ProductCards = () => {


  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart);
  const handleAddToCart=(product)=>{
    if(localStorage.getItem("token"))
    {
      console.log(product);
      dispatch(addToCart(product));
    }
    else{
      alert("Please Login to add to cart");
    }
  }


  const products=shoeData;
  // console.log(shoeData)
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const productChunks = chunkArray(shoeData, slidesToShow);

  return (
    <>
      <div className="mt-5">
      <h2 className="text-center" style={{letterSpacing:"2px"}}>FEATURED PRODUCTS</h2>
      <div className="container mt-4">
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {productChunks.map((chunk, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                {chunk.map((product) => (
                  <div
                    key={product.id}
                    className="col-md-3 col-sm-6 col-12 mb-4"
                  >
                    <div className="product-wrapper text-center">
                      <div className="product-img position-relative">
                        <a href="#" data-abc="true">
                          <img
                            src={product.imageURL}
                            alt={`Product ${product.id}`}
                            className="img-fluid"
                          />
                        </a>
                        <span className="price-tag position-absolute text-center">
                          <i className="fa fa-rupee"></i> {product.price}
                        </span>
                        <div className="product-action position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                          <div className="product-action-style d-flex">
                            <a href="#" className="mx-2">
                              <i className="fa fa-plus"></i>
                            </a>
                            <a href="#" className="mx-2">
                              <i className="fa fa-heart"></i>
                            </a>
                            <a onClick={()=>handleAddToCart(product)} className="mx-2 cursor-pointer">
                              <i className="fa fa-shopping-cart cursor-pointer"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev small-control"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon small-icon"
            aria-hidden="true"

          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next small-control"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon small-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
      <style jsx="true">{`
  .product-wrapper {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background:  rgba(247, 216, 216, 0.2);
    height: 100%; /* Ensure all cards have equal height */
  }
  .product-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .product-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; /* Set a fixed height for the image container */
    overflow: hidden; /* Ensure the image doesn't overflow the container */
  }
  .product-img img {
    max-height: 100%; /* Image adjusts within the container height */
    max-width: 100%; /* Image adjusts within the container width */
    border-radius: 8px;
  }
  .price-tag {
    {/* bottom: 10px; */}
    top:5px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .product-action {
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s linear;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }
  .product-img:hover .product-action {
    visibility: visible;
    opacity: 1;
  }
  .product-action-style a {
    color: #fff;
    font-size: 20px;
    transition: color 0.3s ease;
  }
  .product-action-style a:hover {
    color: #007bff;
  }
  .carousel-item .row {
    display: flex; /* Flex layout to ensure alignment */
    flex-wrap: wrap; /* Wrap items to avoid overflow */
  }
  .carousel-item .col-md-3 {
    display: flex;
    flex-direction: column;
  }
`}</style>

    </div>
      </div>
    </>
  );
};

export default ProductCards;
