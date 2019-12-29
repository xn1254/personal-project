/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 17:14:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const editArticle = (id: string, data: ArticlesModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/articles/${id}`,
        data,
        method: 'PUT',
    });
};

export const addArticle = (data: ArticlesModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/articles',
        data,
        method: 'POST',
    });
};

export const getArticleInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/articles/${id}`,
        method: 'GET',
    });
};

export const getArticleList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/articles',
        method: 'GET',
    });
};

export const deleteArticle = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/articles/${id}`,
        method: 'DELETE',
    });
};
