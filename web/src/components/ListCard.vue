<!--
 * @Author: your name
 * @Date: 2019-12-17 16:07:34
 * @LastEditTime: 2019-12-17 17:41:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\components\Card.vue
 -->
<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active === i}"
      v-for="(category, i) in categories" :key="i"
      @click="$refs.list.swiper.slideTo(i)">
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{autoHeight: true}"
      @slide-change="() => active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) public title!: string;
  @Prop(String) public icon!: string;
  @Prop(Array) public categories!: object[];
  public active: number = 0;
}
</script>

<style>
</style>
