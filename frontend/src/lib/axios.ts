import axios from "axios";

// By creating AxiosInstance we avoid repeating the baseURL path in every file

export const AxiosApiInstance = axios.create({
  baseURL: "http://localhost:5001/api",
});
