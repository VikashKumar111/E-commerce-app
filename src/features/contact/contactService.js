import axios from "axios";
import { base_url} from "../../utils/axiosConfig";


const postQuery = async (contactData) => {
    const response = await axios.post(`${base_url}contact`);
    if (response && response.data) {
        return response.data;
    } else {
        throw new Error("No response data");
    }
};


export const contactService = {
    postQuery,
}