<template>
  <div>
    <div class="nav">
      <div class="nav_main">
        <div @click="home" class="logo">
          <img src="../assets/logo.png" alt />
          <span class="logo_txt">快狗推</span>
        </div>
        <div class="user">
          <div class="useravat">
            <img v-if="userinfo.avatar" :src="userinfo.avatar" alt />
            <img v-else src="../assets/0.jpg" alt srcset />
          </div>
        </div>
      </div>
    </div>
    <div class="bianiji">
      <el-form ref="form" :model="form" label-position="left" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择类目">
          <el-select v-model="form.region" placeholder="请选择类目">
            <el-option
              v-for="(item,index) in leimulist"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            class="avatar-uploader"
            action="https://tgadmin.clvtmcn.cn/index/index/uploadfile"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传文章">
          <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="yulan">预览</el-button>
          <el-button type="primary" @click="onSubmit">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div @click.prevent="nonemodel" v-if="modeAct" class="model">
      <div @click.stop="yulan" class="model_main wrapper" ref="wrapper">
        <div @click.stop="yulan" style="padding-bottom:100px">
          <div class="main_name">{{form.name}}</div>
          <div v-html="contentyu" class="main_txt"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";

import { Quill, quillEditor } from "vue-quill-editor";
import quillConfig from "../util/quill-config";
import { eeSourceBtn } from "../util/quill.eeSourceBtn";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import Request from "../util/http";
export default {
  data() {
    return {
      userinfo: {},
      leimulist: [],
      form: {
        name: "",
        region: "",
      },
      imageUrl: "",
      content: "",
      editorOption: quillConfig,
      modeAct: false,
      contentyu: "",
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    yulan() {
      var con = this.content.replace(/\<img/gi,'<img style="width:100%;height:100%;object-fit: cover"');
      this.modeAct = true;
      if (this.modeAct && this.contentyu) {
        return;
      }
      this.contentyu = con;
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          probeType: 3,
        });
      });
    },
    nonemodel() {
      this.modeAct = false;
      this.contentyu = "";
    },
    initButton: function () {
      //在使用的页面中初始化按钮样式
      const sourceEditorButton = document.querySelector(".ql-sourceEditor");
      sourceEditorButton.style.cssText =
        "width:80px; border:1px solid #ccc; border-radius:5px;";
      sourceEditorButton.innerText = "源码编辑";
    },
    home() {
      this.$router.push("/home");
    },
    onSubmit() {
      var that = this;
      if (this.$route.query.id) {
        console.log("修改");
        axios
          .post("https://tgadmin.clvtmcn.cn/index/index/editArticle", {
            title: this.form.name,
            article_class_id: this.form.region,
            image: this.imageUrl,
            article_content: this.content,
            token: localStorage.getItem("login"),
            id: this.$route.query.id,
          })
          .then((res) => {
            console.log(res.data.code);
            if (res.data.code == 1) {
              this.$message({
                message: "恭喜你，修改成功了",
                type: "success",
              });
              this.$router.push("/about")
              // axios
              //   .get("https://tgadmin.clvtmcn.cn/index/index/articleInfo", {
              //     params: {
              //       id: this.$route.query.id,
              //     },
              //   })
              //   .then((res) => {
              //     this.form.name = res.data.data.title;
              //     this.form.region = res.data.data.article_class_id;
              //     this.content = res.data.data.article_content;
              //     this.imageUrl = res.data.data.image;
              //   });
            }
          });
      } else {
        console.log("新增");
        if (!this.form.region) {
          this.$message({
            message: "请选择选择类目",
            type: "warning",
          });
          return;
        }
        axios
          .post("https://tgadmin.clvtmcn.cn/index/index/ueditoradd", {
            title: this.form.name,
            article_class_id: this.form.region,
            image: this.imageUrl,
            article_content: this.content,
            token: localStorage.getItem("login"),
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "恭喜你，添加成功了",
                type: "success",
              });
              this.$router.push({
                path: "/about",
              });
            }
          });
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = file.response.data;
    },
    beforeAvatarUpload(file) {
      console.log(file, "3333");
    },
  },
  mounted() {
    // Quill.register('modules/eeSourceBtn', eeSourceBtn);
    // quillConfig.register(Quill);
    // quillConfig.initButton();

    if (this.$route.query.id) {
      axios
        .get("https://tgadmin.clvtmcn.cn/index/index/articleInfo", {
          params: {
            id: this.$route.query.id,
          },
        })
        .then((res) => {
          this.form.name = res.data.data.title;
          this.form.region = res.data.data.article_class_id;
          this.content = res.data.data.article_content;
          this.imageUrl = res.data.data.image;
        });
    }
    axios
      .get("https://tgadmin.clvtmcn.cn/index/index/personal", {
        params: {
          token: localStorage.getItem("login"),
          page: 1,
        },
      })
      .then((res) => {
        this.userinfo = res.data.data.user;
        this.list = res.data.data.article.data;
      });

    axios
      .get("https://tgadmin.clvtmcn.cn/index/index/Articleclass")
      .then((res) => {
        this.leimulist = res.data.data;
      });
  },
};
</script>

<style  scoped>
.main_txt {
  margin-top: 20px;
  cursor: pointer;
}
.main_name {
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 550;
}
.model_main {
  width: 270px;
  height: 500px;
  background: #fff;
  border-radius: 20px;
  border: 5px #000 solid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  overflow: hidden;
}
.model {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.658);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.bianiji {
  width: 80%;
  margin: 20px auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
}
.useravat {
  width: 50px;
  height: 50%;
}
.useravat img {
  width: 100%;
  height: 100%;
}
.user {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 80px;
  height: 100px;
}
.nav_main {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav {
  width: 100%;
  height: 80px;
  background: #fff;
  cursor: pointer;
}

.quill-editor {
  height: 300px;
  margin-bottom: 100px;
}
</style>

<style>
.editor {
  line-height: normal !important;
  height: 500px;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
  /* line-height: 20px !important; */
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
.ql-picker-label {
  line-height: 1px !important;
}
</style>

