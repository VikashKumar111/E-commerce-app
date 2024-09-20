import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}user/register`, userData);
    if (response && response.data) {
    return response.data; // Return the response data if it exists
  } else {
    throw new Error("No response data"); // Handle unexpected empty responses
  }
};

const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}user/login`, userData);
    if (response && response.data) {
    return response.data; // Return the response data if it exists
  } else {
    throw new Error("No response data"); // Handle unexpected empty responses
  }
};


export const authService = {
  register,
  login,
};
