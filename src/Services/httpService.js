import axios from "axios";
import { BASE_URL } from "../config/urls";
import Cookies from 'js-cookie';

// Create an Axios instance with a base URL
const http = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to the Axios instance
http.interceptors.request.use(
  config => {

    // Get the token from cookies
    const token = Cookies.get('rthtrh3445gv@@firnf1rgher');

    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Return the modified config
    return config;
  },
  error => {

    // Return the error if something goes wrong with the request
    return Promise.reject(error);
  }
);

// Add a response interceptor to the Axios instance
http.interceptors.response.use(
  response => {

    // Simply return the response if successful
    return response;
  },
  error => {

    // Return the error if something goes wrong with the response
    return Promise.reject(error);
  }
);

export default http;