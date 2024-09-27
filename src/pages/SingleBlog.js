import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import blog1 from "../images/blog-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const dispatch = useDispatch();
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    dispatch(getABlog(blogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img src={blogState?.images[0]?.url ? blogState?.images[0]?.url : blog1} className="img-fluid w-100 py-4" alt="blog" />
              <p  dangerouslySetInnerHTML={{ __html: blogState?.description}}>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
