<!--
 * @Author: your name
 * @Date: 2019-12-06 15:52:10
 * @LastEditTime : 2019-12-29 17:20:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesList.vue
 -->
<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { getArticleList, deleteArticle } from '@/api/article';

@Component
export default class ArticlesList extends Vue {
  public items: object[] = [];
  public created() {
    this.fetch();
  }
  public async fetch() {
    const res: any = await getArticleList();
    this.items = res.data;
  }
  public async deleteItem(row: ArticlesItemModel) {
    this.$confirm(`确认删除文章${row.title}`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(async () => {
      const res = await deleteArticle(row._id);
      this.$message({
        type: 'success',
        message: res.data.msg,
      });
      this.fetch();
    }).catch(() => {
      console.log('cancel');
    });
  }
}
</script>

<style scoped>
</style>