import axios from "axios";
import { API_BASE_URL } from "../config";

export default axios.create({
    baseURL:`${API_BASE_URL}`,
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'YOU_HOST_KEY' 
      }
});