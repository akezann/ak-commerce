// fakestoreService.js
import api from "./api";

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Handle errors as needed
  }
};

// Function for POST requests
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Handle errors as needed
  }
};
