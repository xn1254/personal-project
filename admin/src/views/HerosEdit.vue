<!--
 * @Author: your name
 * @Date: 2019-12-06 15:51:53
 * @LastEditTime: 2019-12-11 01:11:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\views\CategoriesEdit.vue
 -->
<!--  -->
<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}英雄</h1>
    <el-form @submit.native.prevent="save">
      <el-tabs type="border-card" value="skills">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate style="margin-top: 0.7rem" :max="9" show-score v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: 0.7rem" :max="9" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: 0.7rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top: 0.7rem" :max="9" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.item1" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.item2" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
          <el-form-item label="英雄关系">
            <!-- <el-input v-model="model.name"></el-input> -->
          </el-form-item>
          <el-form-item label="图标">
            <el-upload
              class="avatar-uploader"
              :action="$https.defaults.baseURL + '/upload'"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$https.defaults.baseURL + '/upload'"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" size="small" @click="model.skills.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

interface HeroModel {
  name: string;
  title: string;
  categories: string[];
  avatar: string;
  scores: object;
  item1: object[];
  item2: object[];
  skills: object[];
  usageTips: string;
  battleTips: string;
  teamTips: string;
}

@Component
// 导入的其他文件 例如：import moduleName from 'modulePath';
export default class HerosEdit extends Vue {
  public model: HeroModel = {
    name: '',
    title: '',
    categories: [],
    avatar: '',
    scores: {},
    item1: [],
    item2: [],
    skills: [],
    usageTips: '',
    battleTips: '',
    teamTips: '',
  };
  public categories: object[] = [];
  public items: object[] = [];
  @Prop({type: String}) public id!: string;
  public created() {
    this.fetchCategories();
    this.fetchItems();
    this.id && this.fetch();
  }
  // 通过id将新增和编辑页面作区分
  public async save() {
    let res;
    if (this.id) {
      res = await this.$https.put(`rest/heroes/${this.id}`, this.model);
    } else {
      res = await this.$https.post('rest/heroes', this.model);
    }
    this.$router.push('/heros/list');
    this.$message({
      type: 'success',
      message: '保存成功',
    });
  }
  public async fetch() {
    const res = await this.$https.get(`rest/heroes/${this.id}`);
    this.model = Object.assign({}, this.model, res.data);
  }
  public async fetchCategories() {
    const res = await this.$https.get(`rest/categories`);
    this.categories = res.data;
  }
  public async fetchItems() {
    const res = await this.$https.get(`rest/items`);
    this.items = res.data;
  }
  public afterUpload(res: any) {
    this.model.avatar = res.url;
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
