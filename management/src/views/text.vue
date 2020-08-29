<template>
  <div>
    <div class="nav">
      <div class="nav_main">
        <div class="logo">
          <img src="../assets/logo.png" alt />
          <span class="logo_txt">快狗推</span>
        </div>
        <div class="user">
          <div class="useravat">
            <img :src="userinfo.avatar" alt />
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
          <el-button type="primary" @click="onSubmit">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
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
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块

            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向

            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式

            ["clean"], //清除字体样式
            ["image", "video"], //上传图片、上传视频
          ],
        },
        theme: "snow",
      },
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    onSubmit() {
      if (this.$route.query.id) {
        console.log("修改");
        axios
          .get("https://tgadmin.clvtmcn.cn/index/index/editArticle", {
            params: {
              title: this.form.name,
              article_class_id: this.form.region,
              image: this.imageUrl,
              article_content: this.content,
              token: localStorage.getItem("login"),
              id: this.$route.query.id,
            },
          })
          .then((res) => {
            console.log(res.data.code);
            if (res.data.code == 1) {
              this.$message({
                message: "恭喜你，修改成功了",
                type: "success",
              });
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
          .get("https://tgadmin.clvtmcn.cn/index/index/ueditoradd", {
            params: {
              title: this.form.name,
              article_class_id: this.form.region,
              image: this.imageUrl,
              article_content: this.content,
              token: localStorage.getItem("login"),
            },
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
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(URL.createObjectURL(file.raw));
    },
    beforeAvatarUpload(file) {
      console.log(file);
    },
  },
  mounted() {
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
}
</style>

