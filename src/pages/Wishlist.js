import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist?.wishlist);
  console.log(wishlistState);

  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {/* {!wishlistState && <div>No Data</div>} */}
          {wishlistState?.map((item, index) => {
            console.log(item?.images); // Check if images array exists
            console.log(item?.images[0]?.url); // Check if the URL is valid
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src={cross}
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image bg-white">
                    <img
                      src={item?.images[0]?.url ? item.images[0].url : watch}
                      className="img-fluid w-100 d-block mx-auto"
                      alt="watch"
                      // width={160}
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price mb-3 mt-3">$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
