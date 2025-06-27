// src/lib/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // رابط API تبع Laravel
  headers: {
    'Content-Type': 'application/json',
    // أضف هنا أي headers ثانية مثل Authorization لو عندك توكن
  }
});

export default axiosInstance;
