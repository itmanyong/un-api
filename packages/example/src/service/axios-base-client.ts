import axios from "axios";

export const axiosBaseClient = axios.create({
  baseURL: "https://api.example.com", // 替换为你的API基础URL
  timeout: 5000, // 请求超时时间
});
