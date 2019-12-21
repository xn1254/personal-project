/*
 * @Author: your name
 * @Date: 2019-12-18 21:51:46
 * @LastEditTime : 2019-12-18 21:53:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\http\http.ts
 */
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
});

export default http;
