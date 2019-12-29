/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 18:05:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const editItem = (id: string, data: GoodsModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/items/${id}`,
        data,
        method: 'PUT',
    });
};

export const addItem = (data: GoodsModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/items',
        data,
        method: 'POST',
    });
};

export const getItemInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/items/${id}`,
        method: 'GET',
    });
};

export const getItemList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/items',
        method: 'GET',
    });
};

export const deleteItem = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/items/${id}`,
        method: 'DELETE',
    });
};
