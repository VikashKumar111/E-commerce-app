import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
// import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import { useDispatch} from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid , data} = props;
  // const data = props.data || [];
  let location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
  
    dispatch(addToWishlist(id));
  }
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-4"
            }`}
          >
            <div
              // to={`${
              //   location.pathname === "/"
              //     ? "/product/:id"
              //     : location.pathname === "/product/:id"
              //     ? "/product/1"
              //     : ":id"
              // }`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" onClick={(e)=>addToWish(item._id)}>
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img src={item?.images[0].url} className="img-fluid" alt="product" />
                <img src={watch2} className="img-fluid" alt="product " />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">
                  {item?.title}
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block " : "d-none"
                    }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                >
                </p>
                <p className="price">$ {item?.price}</p>
              </div>
              <div className="action-bar position-absolute d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <Link style={{paddingLeft:"6px"}} className="border-0 bg-transparent" to={"/product/"+item?._id}>
                  <img src={view}  alt="view" />
                </Link>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
