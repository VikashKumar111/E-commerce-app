import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response && response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
  } else {
    throw new Error("No response data");
  }
};

const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response && response.data) {
    // localStorage.setItem("Token", response.data.token);
    // console.log("User logged in:", response.data);
    return response.data;
  } else {
    throw new Error("No response data");
  }
};

const getUserWishlist = async () => {
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

  const response = await axios.get(`${base_url}user/wishlist`, config);
  console.log("User Wishlist response:", response);
  if (response.data) {
    return response.data;
  } else {
    throw new Error("No response data");
  }
};

const addToCart = async (cartData) => {
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
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
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
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (cartItemId) => {
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
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductFromCart = async (cartDetail) => {
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

  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
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

  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
};
