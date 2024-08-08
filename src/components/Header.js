import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping over $100 $ Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Contact: <a className="text-white" href="tel: +91 9999999999"> +91 9999999999</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <Link className="text-white">BME</Link>
            </div>
            <div className="col-5"></div>
             <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
