// import React from "react";
// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return <div>
//     <NavLink to="store">OurStore</NavLink>
//   </div>;
// };

// export default Home;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { service } from "../utils/Data";
import mainbanner from "../images/main-banner-1.jpg";
import catbanner from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import watch from "../images/watch.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import { getAllBlogs } from "../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToWishlist, getAllProducts } from "../features/products/productSlice";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import wish from "../images/wish.svg";
// import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import ReactStars from "react-rating-stars-component";


const Home = () => {
  const productState = useSelector((state) => state.product.product);

  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getBlogs();
    getProducts();
  },[]);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  }

  console.log(blogState);

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner  position-relative">
              <img
                src={mainbanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catbanner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {service?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  flex-wrap justify-content-between align-items-center">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <div className="row">
            {productState &&
              productState.map((item, index) => {
                if (item.tags === "featured") {
                  return (
                    <div
                      key={index}
                      className={"col-3 mb-4"}
                    >
                      <div
                        className="product-card position-relative"
                      >
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => addToWish(item._id)}
                          >
                            <img src={wish} alt="wishlist" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0].url}
                            className="img-fluid"
                            alt="product"
                          />
                          <img
                            src={watch2}
                            className="img-fluid"
                            alt="product "
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.totalrating.toString()}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $500 to $5000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $500 to $5000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $500 to $5000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $500 to $5000</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct
                      id={item?._id}
                      key={index}
                      item={item?.brand}
                      title={item?.title}
                      totalrating={item?.totalrating.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <div
                      key={index}
                      className={"col-3 mb-4"}
                    >
                      <div
                        className="product-card position-relative"
                      >
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => addToWish(item._id)}
                          >
                            <img src={wish} alt="wishlist" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0].url}
                            className="img-fluid"
                            alt="product"
                          />
                          <img
                            src={watch2}
                            className="img-fluid"
                            alt="product "
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.totalrating}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          {/* <p
                            className={`description ${
                              grid === 12 ? "d-block " : "d-none"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></p> */}
                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState && blogState.length > 0 ? (
            blogState.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
