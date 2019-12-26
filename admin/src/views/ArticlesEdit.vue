<!--
 * @Author: your name
 * @Date: 2019-12-06 15:51:53
 * @LastEditTime : 2019-12-26 15:48:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesEdit.vue
 -->
<!--  -->
<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor useCustomImageHandler @image-added="handlerImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VueEditor } from 'vue2-editor';

@Component({
  components: {
    VueEditor,
  },
})

// 导入的其他文件 例如：import moduleName from 'modulePath';
export default class ArticlesEdit extends Vue {
  public model: ArticlesModel = {
    title: '',
    body: '',
    categories: [],
  };
  public categories: object[] = [];
  @Prop({type: String}) public id!: string;
  public created() {
    this.fetchCategories();
    this.id && this.fetch();
  }
  // 通过id将新增和编辑页面作区分
  public async save() {
    let res;
    if (this.id) {
      res = await this.$https.put(`rest/articles/${this.id}`, this.model);
    } else {
      res = await this.$https.post('rest/articles', this.model);
    }
    this.$router.push('/articles/list');
    this.$message({
      type: 'success',
      message: '保存成功',
    });
  }
  public async fetch() {
    const res = await this.$https.get(`rest/articles/${this.id}`);
    this.model = res.data;
  }
  // 获取分类未做数据过滤
  public async fetchCategories() {
    const res = await this.$https.get('rest/categories?name=新闻分类');
    this.categories = res.data;
  }
  public async handlerImageAdded(file: any, Editor: any, cursorLocation: any, resetUploader: any) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await this.$https.post('upload', formData);
    Editor.insertEmbed(cursorLocation, 'image', res.data.url);
    resetUploader();
  }
}
</script>

<style scoped>
</style>
