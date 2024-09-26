import React from "react";
import { Link } from "react-router-dom";
import blog  from "../images/blog-1.jpg";

const BlogCard = (props) => {
  const [id, title, description, image ,date] = props;
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={image? image : blog} className="img-fluid w-100" alt="img-fluid " />
        </div>
        <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
          <p className="desc">
            {description}
          </p>
          <Link to={"/blog/" + id} className="button">Read More</Link>
        </div>
      </div>
  );
};

export default BlogCard;
