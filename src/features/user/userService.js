import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

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
    return response.data;
  } else {
    throw new Error("No response data");
  }
};


const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }else {
    throw new Error("No response data");
  }
}

export const authService = {
  register,
  login,
  getUserWishlist,
};
