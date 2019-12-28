/*
 * @Author: your name
 * @Date: 2019-12-28 16:04:53
 * @LastEditTime : 2019-12-28 16:59:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const getNewsList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'news/list',
        method: 'GET',
    });
};

export const getHeroList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'hero/list',
        method: 'GET',
    });
};

export const getHeroDetails = (params: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `hero/${params}`,
        method: 'GET',
    });
};

export const getArticleDetails = (params: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `article/${params}`,
        method: 'GET',
    });
};
