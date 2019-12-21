/*
 * @Author: your name
 * @Date: 2019-12-06 16:44:15
 * @LastEditTime : 2019-12-22 00:30:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\http\http.ts
 */
import axios from 'axios';
import Vue from 'vue';
import router from '../router';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
});

http.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token;
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 全局拦截响应错误
http.interceptors.response.use((res) => {
  return res;
}, (err) => {
  if (err.response.data.message) {
    // 引入的是vue构造函数，并不是vue实例，所以需要在原型链上去找$message属性
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message,
    });
  }
  if (err.response.status === 401) {
    router.push('/login');
  }
  return Promise.reject(err);
});

export default http;
