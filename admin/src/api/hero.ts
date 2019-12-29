/*
 * @Author: your name
 * @Date: 2019-12-29 15:37:12
 * @LastEditTime : 2019-12-29 18:11:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\src\api\network.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

export const editHero = (id: string, data: HeroModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/heroes/${id}`,
        data,
        method: 'PUT',
    });
};

export const addHero = (data: HeroModel): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/heroes',
        data,
        method: 'POST',
    });
};

export const getHeroInfo = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/heroes/${id}`,
        method: 'GET',
    });
};

export const getHeroList = (): AxiosPromise<ResponseData> => {
    return axios.request({
        url: 'rest/heroes',
        method: 'GET',
    });
};

export const deleteHero = (id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `rest/heroes/${id}`,
        method: 'DELETE',
    });
};
