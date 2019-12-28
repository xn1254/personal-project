/*
 * @Author: your name
 * @Date: 2019-12-28 15:11:12
 * @LastEditTime : 2019-12-28 16:42:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\utils\axios.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
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
    // 添加全局请求和响应逻辑
    private interceptors(instance: AxiosInstance, url?: string) {
        // 配置请求拦截器
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        });
        // 配置响应拦截器
        instance.interceptors.response.use((res: AxiosResponse) => {
            const { msg } = res.data;
            const { status } = res;
            if (status !== 200) {
                console.error(msg);
            }
            return res;
        },
        (error) => {
            return Promise.reject(error);
        });
    }
    // 合并基础路径配置和接口单独配置
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

export default HttpRequest;
