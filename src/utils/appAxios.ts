import axios from "axios";
import { BASE_URL } from "../constants/baseURL";

const appAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default appAxios;
