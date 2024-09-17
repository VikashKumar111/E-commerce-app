import React from "react";
import { Link } from "react-router-dom";
import blog  from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={blog} className="img-fluid w-100" alt="img-fluid " />
        </div>
        <div className="blog-content">
          <p className="date"> 16 Aug , 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <Link to="/blog/:id" className="button">Read More</Link>
        </div>
      </div>
  );
};

export default BlogCard;
