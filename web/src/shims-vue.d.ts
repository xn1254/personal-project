/*
 * @Author: your name
 * @Date: 2019-12-16 00:11:08
 * @LastEditTime : 2019-12-18 22:11:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

import Vue from 'vue'
import { AxiosInstance } from 'axios'
declare module 'vue/types/vue' {
  interface VueConstructor {
    $axios: AxiosInstance;
  }
  interface Vue {
    $axios: AxiosInstance;
  }
}
