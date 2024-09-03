import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft/>Go back to Blogs</Link>
                <h3 className="title">A beautiful sunday morning renaissance</h3>
                <img src="images/blog-1.jpg" className="img-fluid w-100 py-4" alt="blog" />
                <p>
                  Discover breathtaking destinations, travel tips, and hidden
                  gems as you embark on unforgettable adventures around the
                  world. Explore diverse cultures, scenic landscapes, and unique
                  experiences.From serene beaches to majestic mountains, our
                  blog covers it all. Get inspired with itineraries, local
                  insights, and travel hacks to make your journeys
                  extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
