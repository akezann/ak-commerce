// api.js
import axios from "axios";

// Create an axios instance with a baseURL
const api = axios.create({
  baseURL: "https://fakestoreapi.com", // Fakestore API base URL
});

export default api;
