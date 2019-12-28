<!--
 * @Author: your name
 * @Date: 2019-12-16 00:11:08
 * @LastEditTime : 2019-12-28 16:52:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\views\Home.vue
 -->
<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link 
        tag="div"
        :to="`/article/${news._id}`"
        class="py-2 fs-lg d-flex" 
        v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
          tag="div"
          :to="`/hero/${hero._id}`"
          class="p-2 text-center"
          style="width: 20%;" 
          v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import dayjs from 'dayjs';
import { getNewsList, getHeroList } from '@/api/network';

@Component({
  name: 'Home',
  filters: {
    date(val: any): string {
      return dayjs(val).format('MM/DD');
    },
  },
})
export default class Home extends Vue {
  public swiperOption: object = {
    pagination: {
      el: '.pagination-home',
    },
  };
  public newsCats: NewCatModel[] = [];
  public heroCats: HeroCatModel[] = [];
  public created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  }
  public async fetchNewsCats() {
    const res: any = await getNewsList();
    this.newsCats = res.data;
  }
  public async fetchHeroCats() {
    const res: any = await getHeroList();
    this.heroCats = res.data;
  }
}
</script>

<style lang="scss">
@import '../commoncss/_variables';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
