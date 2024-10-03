import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity ,id } = props;
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product" />
          </div>
          <div className="special-product-content">
            <h6 className="brand">{brand}</h6>
            <h5 className="product-title">{title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span>$ {price}</span> &nbsp;
              {/* <strike>$200</strike> */}
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-8">
                <b>5</b>days
              </p>
              <div className="d-flex align-items-center gap-10">
                <span className="badge rounded-circle p-3 bg-danger">1</span>
                <span className="badge rounded-circle p-3 bg-danger">1</span>
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / quantity + sold * 100 + "%" }}
                  aria-valuenow={quantity / quantity + sold * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button" to={"/product/"+id}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
