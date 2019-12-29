/*
 * @Author: your name
 * @Date: 2019-12-29 15:20:16
 * @LastEditTime : 2019-12-29 18:20:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\utils\axios.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import Vue from 'vue';
import router from '@/router';
import apiConfig from '../config';

const { api: { devApiBaseUrl, proApiBaseUrl } } = apiConfig;
const apiBaseUrl = process.env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;

class HttpRequest {
    constructor(public baseUrl: string = apiBaseUrl) {
        this.baseUrl = baseUrl;
    }
    public request(options: AxiosRequestConfig): AxiosPromise {
        const instance: AxiosInstance = axios.create();
        options = this.mergeConfig(options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
    private interceptors(instance: AxiosInstance, url?: string) {
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            if (localStorage.token) {
                config.headers.Authorization = 'Bearer ' + localStorage.token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use((res: AxiosResponse) => {
            const { msg } = res.data;
            const { status } = res;
            if (status !== 200) {
                console.error(msg);
            }
            return res;
        }, (err) => {
            console.log(err);
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
    }
    private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
        return Object.assign({
            baseURL: this.baseUrl,
        }, options);
    }
}

export interface ResponseData {
    code: number;
    data?: any;
    msg: string;
}

export const baseURL = apiBaseUrl;

export default HttpRequest;
