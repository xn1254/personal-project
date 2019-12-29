<!--
 * @Author: your name
 * @Date: 2019-12-06 15:51:53
 * @LastEditTime : 2019-12-29 16:46:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesEdit.vue
 -->
<!--  -->
<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}管理员</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { editAdminUser, addAdminUser, getAdminUserInfo } from '@/api/adminUser';

@Component
// 导入的其他文件 例如：import moduleName from 'modulePath';
export default class AdminUserEdit extends Vue {
  public model: UserModel = {
    username: '',
    password: '',
  };
  @Prop({type: String}) public id!: string;
  public created() {
    this.id && this.fetch();
  }
  // 通过id将新增和编辑页面作区分
  public async save() {
    let res;
    if (this.id) {
      // res = await this.$https.put(`rest/admin_users/${this.id}`, this.model);
      res = await editAdminUser(this.id, this.model);
    } else {
      res = await addAdminUser(this.model);
      // res = await this.$https.post('rest/admin_users', this.model);
    }
    this.$router.push('/admin_users/list');
    this.$message({
      type: 'success',
      message: '保存成功',
    });
  }
  public async fetch() {
    // const res = await this.$https.get(`rest/admin_users/${this.id}`);
    const res: any = await getAdminUserInfo(this.id);
    this.model = res.data;
  }
}
</script>

<style scoped>
</style>
