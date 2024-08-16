import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date"> 16 Aug , 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
