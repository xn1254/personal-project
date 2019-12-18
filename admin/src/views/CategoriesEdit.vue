<!--
 * @Author: your name
 * @Date: 2019-12-06 15:51:53
 * @LastEditTime : 2019-12-18 15:10:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesEdit.vue
 -->
<!--  -->
<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
// 导入的其他文件 例如：import moduleName from 'modulePath';
export default class CategoriesEdit extends Vue {
  public model: CategoriesModel = {
    name: '',
    parent: [],
  };
  public parents: object[] = [];
  @Prop({type: String}) public id!: string;
  public created() {
    this.fetchParents();
    this.id && this.fetch();
  }
  // 通过id将新增和编辑页面作区分
  public async save() {
    if (this.model.parent === '') {
      delete this.model.parent;
    }
    let res;
    if (this.id) {
      res = await this.$https.put(`rest/categories/${this.id}`, this.model);
    } else {
      res = await this.$https.post('rest/categories', this.model);
    }
    this.$router.push('/categories/list');
    this.$message({
      type: 'success',
      message: '保存成功',
    });
  }
  public async fetch() {
    const res = await this.$https.get(`rest/categories/${this.id}`);
    this.model = res.data;
  }
  // 获取分类未做数据过滤
  public async fetchParents() {
    const res = await this.$https.get('rest/categories');
    this.parents = res.data;
  }
}
</script>

<style scoped>
</style>
