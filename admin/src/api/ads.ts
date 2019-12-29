/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 16:50:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const editAds = (id: string, data: AdsModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/ads/${id}`,
        data,
        method: 'PUT',
    });
};

export const addAds = (data: AdsModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/ads',
        data,
        method: 'POST',
    });
};

export const getAdsInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/ads/${id}`,
        method: 'GET',
    });
};

export const getAdsList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/ads',
        method: 'GET',
    });
};

export const deleteAds = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/ads/${id}`,
        method: 'DELETE',
    });
};
