import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response && response.data) {
    return response.data;
  } else {
    throw new Error("No response data");
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response && response.data) {
    return response.data;
  } else {
    throw new Error("No response data");
  }
};

// const addToWishlist = async (prodId) => {
//     const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
//      console.log(response);
//     if (response && response.data) {

//         return response.data;
//     } else {
//         throw new Error("No response data");
//     }
// };

const addToWishlist = async (prodId) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("Token");

    console.log("Token retrieved from localStorage:", token);

    // If the token exists, include it in the headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Log the config object to see what it's passing in the request
    console.log("Config object:", config);

    // Make the API request with the token
    const response = await axios.put(
      `${base_url}product/wishlist`,
      { prodId },
      config
    );

    console.log("Wishlist response:", response);
    if (response && response.data) {
      return response.data;
    }
    throw new Error("No response data");
  } catch (error) {
    // Check if token expired
    if (
      error.response &&
      error.response.data.message ===
        "Not Authorized token expired , Please login again"
    ) {
      // Redirect to login or handle token refresh
      //   alert("Session expired. Please login again.");
      // Optionally redirect user:
      //   window.location.href = "/login";  // or your login route
    } else {
      console.error("Error adding to wishlist:", error.message);
      throw error; // Re-throw other errors for further handling
    }
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
};
