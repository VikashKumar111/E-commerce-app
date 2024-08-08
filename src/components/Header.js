import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white">Free Shipping over $100 $ Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Contact: <a href="tel: +91 9999999999"> +91 9999999999</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
