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

const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId });
    if (response && response.data) {
        return response.data;
    } else {
        throw new Error("No response data");
    }
} 

export const productService = {
    getProducts,
    addToWishlist,
}