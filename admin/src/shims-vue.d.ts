/*
 * @Author: your name
 * @Date: 2019-12-05 23:45:34
 * @LastEditTime: 2019-12-13 10:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

import Vue from 'vue';
import { ElMessage } from 'element-ui/types/message';
import { ElMessageBoxShortcutMethod } from 'element-ui/types/message-box'
import { AxiosInstance } from 'axios'
declare module 'vue/types/vue' {
  interface VueConstructor {
    $https: AxiosInstance,
    $message: ElMessage,
    $confirm: ElMessageBoxShortcutMethod,
  }
  interface Vue {
    $https: AxiosInstance,
    $message: ElMessage,
    $confirm: ElMessageBoxShortcutMethod,
  }
}
