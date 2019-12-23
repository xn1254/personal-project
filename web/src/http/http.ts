/*
 * @Author: your name
 * @Date: 2019-12-18 21:51:46
 * @LastEditTime : 2019-12-23 16:54:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\http\http.ts
 */
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
});

export default http;
