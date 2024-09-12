import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-content-center">
                <div className="cart-col-1"></div>
                <div className="cart-col-2"></div>
                <div className="cart-col-3"></div>
                <div className="cart-col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
