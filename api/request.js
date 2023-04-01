import axios from 'axios';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 可以在这里添加token等请求头信息
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default request;
