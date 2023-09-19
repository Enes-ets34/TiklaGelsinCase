import axios from "axios";
import { BASE_URL } from "../constants/baseURL";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response; 
  },
  (error) => {
    return Promise.reject(error); // Hatanın yeniden atılması
  }
);

export default api;
