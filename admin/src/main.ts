/*
 * @Author: your name
 * @Date: 2019-12-05 23:45:34
 * @LastEditTime : 2019-12-18 21:55:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import './plugins/element.js';
import axios from './http/http';

Vue.config.productionTip = false;
Vue.prototype.$https = axios;
Vue.mixin({
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`,
      };
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
