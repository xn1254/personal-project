/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 16:50:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const login = (data: UserModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'login',
        data,
        method: 'POST',
    });
};

export const editAdminUser = (id: string, data: UserModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/admin_users/${id}`,
        data,
        method: 'PUT',
    });
};

export const addAdminUser = (data: UserModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/admin_users',
        data,
        method: 'POST',
    });
};

export const getAdminUserInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/admin_users/${id}`,
        method: 'GET',
    });
};

export const getAdminUserList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/admin_users',
        method: 'GET',
    });
};

export const deleteAdminUser = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/admin_users/${id}`,
        method: 'DELETE',
    });
};
