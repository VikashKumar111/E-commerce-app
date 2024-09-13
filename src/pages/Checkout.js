import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">BME</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                              <p className="user-details">vkvk(vkghfh@gmail.com)</p>
                              <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                  <div className="w-100">
                                      <select name="" className="form-control form-select" id=""></select>
                                  </div>
                                  <div>
                                      <input type="text" className="form-control"/>
                                  </div>
                                  <div>
                                      <input type="text" className="form-control"/>
                                  </div>
                                   <div className="w-100">
                                      <input type="text" className="form-control"/>
                                  </div>
                                   <div className="w-100">
                                      <input type="text" className="form-control"/>
                                  </div>
                                  <div>
                                      <input type="text" className="form-control"/>
                                  </div>
                                   <div>
                                      <select name="" className="form-control form-select" id=""></select>
                                  </div>
                                  <div>
                                      <input type="text" className="form-control"/>
                                  </div>
                              </form>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
