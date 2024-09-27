// import React from "react";
// import { Link } from "react-router-dom";
// import blog  from "../images/blog-1.jpg";

// const BlogCard = (props) => {
//   const { id, title, description, image, date } = props;
//   console.log(image);

//   // Check if the image is a valid blob URL
//   const isValidBlobUrl = (url) => {
//     try {
//       return typeof url === 'string' && url.startsWith('blob:');
//     } catch (e) {
//       return false;
//     }
//   };
//   return (
//       <div className="blog-card">
//       <div className="card-image">
          
//         {/* <img src={image? image : blog} className="img-fluid w-100" alt="blog " /> */}
//         {/* <img src={image && image !== "" ? image : blog}  className="img-fluid w-100" alt="blog " />  */}
//            <img
//           src={image && image !== "" && isValidBlobUrl(image) ? image : blog}
//           className="img-fluid w-100"
//           alt="blog"
//         />
//         <div className="blog-content">
//         <p className="date">{date}</p>
//         <h5 className="title">{title}</h5>
//           <p className="desc">
//             {description}
//           </p>
//           <Link to={"/blog/" + id} className="button">Read More</Link>
//         </div>
//       </div>
//   );
// };

// export default BlogCard;




import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg"; // Make sure this path is correct

const BlogCard = (props) => {
  const { id, title, description, image, date } = props;

  console.log("Image prop:", image);

  // Check if the URL is valid (it could be blob or normal URL)
  // const isValidUrl = (url) => {
  //   try {
  //     return typeof url === 'string' && (url.startsWith('blob:') || url.startsWith('http'));
  //   } catch (e) {
  //     return false;
  //   }
  // };

  return (
    <div className="blog-card">
      <div className="card-image">
        {/* Check if the image is valid, otherwise use fallback */}
        <img 
          // src={image && image !== "" && isValidUrl(image) ? image : blog}
           src={image && image !== "" ? image : blog} 
          className="img-fluid w-100" 
          alt="blog" 
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p className="desc">{description}</p>
        <Link to={`/blog/${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
