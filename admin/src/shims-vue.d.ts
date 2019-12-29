/*
 * @Author: your name
 * @Date: 2019-12-05 23:45:34
 * @LastEditTime : 2019-12-29 17:02:11
 * @LastEditors  : Please set LastEditors
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
declare module 'vue/types/vue' {
  interface VueConstructor {
    $httpsBaseUrl: string;
    $message: ElMessage;
    $confirm: ElMessageBoxShortcutMethod;
  }
  interface Vue {
    $httpsBaseUrl: string;
    $message: ElMessage;
    $confirm: ElMessageBoxShortcutMethod;
  }
}
