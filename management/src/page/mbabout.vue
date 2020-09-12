<template>
  <div class="about">
    <!-- <div class="model">
      <img style="width:100%" src="https://tgadmin.clvtmcn.cn/upload/img/gzh.jpg" alt srcset />
    </div>-->
    <div class="nav">
      <div class="nav_main">
        <div @click="home" class="logo">
          <img src="../assets/logo.png" alt />
          <span class="logo_txt" style="font-size:15px">快狗推</span>
        </div>
        <div class="user">
          <div class="useravat">
            <img v-if="userinfo.avatar" :src="userinfo.avatar" alt />
            <img v-else src="../assets/0.jpg" alt srcset />
          </div>
          <div @click="flowfun" class="nav_right">
            <el-tooltip class="item" effect="dark" content="新手流程" placement="bottom">
              <div class="iconfont iconliucheng1"></div>
            </el-tooltip>
          </div>
          <div @click="shouyi" class="nav_right">
            <el-tooltip class="item" effect="dark" content="收益" placement="bottom">
              <div class="iconfont iconshouyi"></div>
            </el-tooltip>
          </div>
          <div @click="quit" class="nav_right">
            <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
              <div class="iconfont icontuichu"></div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="list">
      <div class="list_title">
        <span>文章</span>
        <div>
          <span @click="shipin" style="color:#2489f1;margin-right:20px">
            <span class="iconfont iconsucai"></span> 素材库
          </span>
          <span @click="text" style="color:#2489f1;margin-right:20px">
            <span class="iconfont iconbianji"></span> 写文章
          </span>
        </div>
      </div>
      <div class="list_main">
        <div v-for="(item,index) in list" :key="index" class="list_item">
          <img class="item_left" v-if="item.image" style="width:60px" :src="item.image" alt />
          <div class="item_right">
            <div class="right_title">{{item.title}}</div>
            <div class="right_date">{{item.add_time}}</div>
          </div>
          <div class="chakan">
            <div class="chakan_item" @click="chakanfun(item)">查看详情</div>
          </div>
        </div>
      </div>
      <div style="float:right" class="fenye">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="num"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Request from "../util/http";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      page: 1,
      visible: false,
      userinfo: {},
      list: [],
      num: 0,
      message: "请稍等...",
      douyin: false,
      txt: "",
    };
  },
  mounted() {
    Request({
      url: "index/index/personal",
      method: "get",
      params: {
        token: localStorage.getItem("login"),
        page: 1,
      },
    }).then((res) => {
      this.userinfo = res.data.data.user;
      this.list = res.data.data.article.data;
      this.num = res.data.data.num;
    });
  },
  methods: {
    shipin() {
      //素材库
      let routeUrl = this.$router.resolve({
        path: "/mbsearch",
      });
      window.open(routeUrl.href, "_blank");
    },
    flowfun() {
      let routeUrl = this.$router.resolve({
        path: "/mbflow",
      });
      window.open(routeUrl.href, "_blank");
    },
    shouyi() {
      let routeUrl = this.$router.resolve({
        path: "/mbshouyi",
      });
      window.open(routeUrl.href, "_blank");
    },
    quit() {
      localStorage.removeItem("login");
      this.$router.push("/mbhome");
    },
    home() {
      this.$router.push("/mbhome");
    },
    chakanfun(item) {
      let routeUrl = this.$router.resolve({
        path: "/mbtext",
        query: {
          id: item.id,
        },
      });
      window.open(routeUrl.href, "_blank");
    },
    text() {
      let routeUrl = this.$router.resolve({
        path: "/mbtext",
      });
      window.open(routeUrl.href, "_blank");
    },
    handleCurrentChange(e) {
      //分页
      this.page = e;
      Request({
        url: "index/index/personal",
        method: "get",
        params: {
          token: localStorage.getItem("login"),
          page: e,
        },
      }).then((res) => {
        this.userinfo = res.data.data.user;
        this.list = res.data.data.article.data;
      });
    },
    handleSizeChange(e) {},
  },
};
</script>

<style  scoped>
.no_douyin {
  text-align: center;
}
.model {
  position: fixed;
  right: 30px;
  top: 60%;
  background: red;
  z-index: 99999999999999999;
  width: 100px;
  height: 100px;
}
.chakan_item {
  background: rgb(209, 17, 17);
  color: #fff;
  padding: 5px 10px;
  margin-right: 10px;
}
.chakan {
  position: absolute;
  right: 30px;
  bottom: 20px;
  display: flex;
  align-items: center;
}
.right_date {
  color: #999;
  line-height: 40px;
  font-size: 14px;
}
.right_title {
  width: 100%;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item_right {
  padding-left: 20px;
  height: 100%;
  flex: 1;
  width: 80px;
}
.item_left {
  width: 100px;
  height: 90px;
  flex: 0.8;
}
.item_left img {
  width: 100% !important;
}
.list_item {
  position: relative;
  width: 100%;
  height: 100px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
}
.list_main {
  width: 90%;
  margin: 0 auto;
}
.fenye {
}
.list_title {
  padding: 20px;
  border-bottom: 1px #c2c2cc solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list {
  width: 95%;
  margin: 20px auto;
  background: #fff;
  border-radius: 20px;
  padding-bottom: 80px;
}
.da_avatr img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.useravat img {
  width: 100%;
  height: 100%;
}
.bjzl {
  display: inline;
  padding: 5px 20px;
  border: 1px blue solid;
  float: right;
  margin-right: 50px;
}
.username {
  font-size: 20px;
  margin-top: 20px;
}
.usertxt {
  width: 70%;
  height: 100px;
  float: right;
}
.da_avatr {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 70px;
  left: 100px;
}
.main_title {
  width: 100%;
  height: 130px;
  background: #999999;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.main {
  width: 80%;
  height: 300px;
  background: #fff;
  margin: 20px auto;
  border-radius: 20px;
  position: relative;
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
  justify-content: space-around;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 70px;
  height: 90px;
}
.nav_main {
  width: 90%;
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
div {
  cursor: pointer;
}
.item_left img {
  width: 130px;
}
</style>
