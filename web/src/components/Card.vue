<!--
 * @Author: your name
 * @Date: 2019-12-17 16:07:34
 * @LastEditTime: 2019-12-17 17:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\components\Card.vue
 -->
<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center" 
    :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">
        <strong>{{title}}</strong>
      </div>
      <i class="iconfont icon-menu" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';

// 组件一定要加@component修饰符
@Component
export default class Card extends Vue {
  @Prop({type: String, default: 'deafult'}) public title!: string;
  @Prop({type: String, default: 'deafult'}) public icon!: string;
  @Prop({type: Boolean, default: false}) public plain!: boolean;
  public created() {
    console.log(this.title);
  }
}
</script>

<style lang="scss">
@import "../commoncss/_variables.scss";
.card {
  border-bottom: 1px solid $border-color;
}
</style>
