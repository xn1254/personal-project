<!--
 * @Author: your name
 * @Date: 2019-12-11 15:38:36
 * @LastEditTime : 2019-12-29 16:46:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\Login.vue
 -->
<template>
  <div class='login-container'>
    <el-card header="请先登录" class="login-card">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item >
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { login } from '@/api/adminUser';

@Component
export default class Login extends Vue {
  public model: UserModel = {
    username: '',
    password: '',
  };
  public async login() {
    const res: any = await login(this.model);
    localStorage.token = res.data.token;
    this.$message({
      type: 'success',
      message: '登录成功',
    });
    this.$router.push('/');
  }
}
</script>
<style scoped>
.login-card{
  width: 25rem;
  margin: 6rem auto
}
</style>
