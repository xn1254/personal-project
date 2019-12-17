/*
 * @Author: your name
 * @Date: 2019-12-16 00:11:08
 * @LastEditTime: 2019-12-17 17:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './commoncss/reset.scss';
import './assets/iconfont/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Card from './components/Card.vue';
import ListCard from './components/ListCard.vue';

Vue.component('m-list-card', ListCard);
Vue.component('m-card', Card);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
