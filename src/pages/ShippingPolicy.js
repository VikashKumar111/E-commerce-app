import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="ShippingPolicy" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
