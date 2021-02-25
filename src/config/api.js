import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: API_URL || "http://127.0.0.1:5000",
  headers: {
    Accept: "application/json",
  },
});
