/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 18:00:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const editCategory = (id: string, data: CategoriesModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/categories/${id}`,
        data,
        method: 'PUT',
    });
};

export const addCategory = (data: CategoriesModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/categories',
        data,
        method: 'POST',
    });
};

export const getCategoryInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/categories/${id}`,
        method: 'GET',
    });
};

export const getCategoryList = (name?: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: name ? `rest/categories?name=${name}` : 'rest/categories',
        method: 'GET',
    });
};

export const deleteCategory = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/categories/${id}`,
        method: 'DELETE',
    });
};
