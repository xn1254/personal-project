/*
 * @Author: your name
 * @Date: 2019-12-29 17:36:58
 * @LastEditTime : 2019-12-29 17:45:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\upload.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const uploadFile = (data: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'upload',
        data,
        method: 'POST',
    });
};
