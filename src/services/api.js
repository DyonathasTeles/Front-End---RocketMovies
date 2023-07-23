import axios from "axios";

export const api = axios.create({
  baseURL:"https://rocketmovies-api-tt4h.onrender.com"
  // baseURL:"http://localhost:"
})