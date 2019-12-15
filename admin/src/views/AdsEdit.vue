<!--
 * @Author: your name
 * @Date: 2019-12-06 15:51:53
 * @LastEditTime: 2019-12-13 16:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesEdit.vue
 -->
<!--  -->
<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="12" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="跳转链接(url)">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图标">
              <el-upload
                class="avatar-uploader"
                :action="$https.defaults.baseURL + '/upload'"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" size="small" @click="model.items.splice(index, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

interface CategoriesModel {
  name: string;
  items: object[];
}

@Component
// 导入的其他文件 例如：import moduleName from 'modulePath';
export default class AdaEdit extends Vue {
  public model: CategoriesModel = {
    name: '',
    items: [],
  };
  @Prop({type: String}) public id!: string;
  public created() {
    this.id && this.fetch();
  }
  // 通过id将新增和编辑页面作区分
  public async save() {
    let res;
    if (this.id) {
      res = await this.$https.put(`rest/ads/${this.id}`, this.model);
    } else {
      res = await this.$https.post('rest/ads', this.model);
    }
    this.$router.push('/ads/list');
    this.$message({
      type: 'success',
      message: '保存成功',
    });
  }
  public async fetch() {
    const res = await this.$https.get(`rest/ads/${this.id}`);
    this.model = Object.assign({}, this.model, res.data);
  }
}
</script>

<style scoped>
.avatar-uploader>>>.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader>>>.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.avatar {
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>
