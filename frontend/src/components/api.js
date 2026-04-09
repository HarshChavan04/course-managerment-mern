import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/course"
});

export default API;