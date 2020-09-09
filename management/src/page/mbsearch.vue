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
          <div @click="quit" class="nav_right">
            <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
              <div class="iconfont icontuichu"></div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list_title">
        <div class="search_inp">
          <el-input
            placeholder="请输入内容"
            @keyup.enter.native="searchfun"
            prefix-icon="el-icon-search"
            v-model="input2"
          ></el-input>
          <el-button type="primary" @click="searchfun">搜索</el-button>
        </div>
        <div>
          <span @click="text" style="color:#2489f1;margin-right:20px;font-size:15px">
            <span class="iconfont iconbianji"></span> 写文章
          </span>
        </div>
      </div>
      <div class="list_main">
        <div v-for="(item,index) in list" :key="index" class="list_item">
          <img class="item_left" v-if="item.image" :src="item.image" alt />
          <div class="item_right">
            <div class="right_title">{{item.title}}</div>
            <div class="right_date">{{item.date}}</div>
          </div>
          <div class="chakan">
            <div class="chakan_item" @click="chakanfun(item)">查看详情</div>
            <el-popover title="结果" placement="bottom" width="250" trigger="click">
              <div class="yes_douyin" v-if="!douyin">
                <div style="margin:20px 0px">{{message}}</div>
                <el-button
                  type="primary"
                  size="mini"
                  v-clipboard:copy="message"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >复制</el-button>
              </div>
              <div v-if="douyin" class="no_douyin">
                <div>
                  <img style="80%" src="https://tgadmin.clvtmcn.cn/upload/img/gzh.jpg" alt srcset />
                </div>
                <div>{{txt}}</div>
              </div>
              <div class="chakan_item" style="margin-right:0px" @click="copyfun(item)" slot="reference">生成链接</div>
            </el-popover>
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
const baseUrl="https://tgadmin.clvtmcn.cn/"
export default {
  data() {
    return {
      userinfo: {},
      list: [],
      num: 0,
      message: "请稍等...",
      douyin: false,
      txt: "",
      page: 1,
      input2: "",
    };
  },
  mounted() {
    axios.get(`${baseUrl}index/index/personal`, {
        params: {
          token: localStorage.getItem("login"),
          page: 1,
        },
      }).then((res) => {
        this.userinfo = res.data.data.user;
      });
    axios.get(`${baseUrl}index/index/articleall`, {
        params: {
          token: localStorage.getItem("login"),
          page: 1,
        },
      }).then((res) => {
        
        this.list = res.data.data.data;
        this.num = res.data.data.num;
      });
  },
  watch: {
    input2: function (val) {
      if (val == "") {
        axios.get(`${baseUrl}index/index/articleall`, {
            params: {
              token: localStorage.getItem("login"),
              page: 1,
            },
          }).then((res) => {
            this.list = res.data.data.data;
            this.num = res.data.data.num;
          });
      }
    },
  },
  methods: {
    searchfun() {
      if (!this.input2) {
        this.$message({
          message: "警告哦，搜索不能为空",
          type: "warning",
        });
      } else {
        Request({
          url: "index/index/articleall",
          method: "get",
          params: {
            title: this.input2,
            page: 1,
          },
        }).then((res) => {
          this.list = res.data.data.data;
          this.num = res.data.data.num;
        });
      }
    },
    copyfun(v) {
      this.message = "请稍等...";
      Request({
        url: "index/index/downloadQrcode",
        method: "get",
        params: {
          appid: "tt99eeef5306d4c283",
          id: v.id,
          token: localStorage.getItem("login"),
          type: "douyin",
        },
      }).then((res) => {
        if (res.data.code == 1) {
          this.message = res.data.data.url_address;
          this.douyin = false;
        } else {
          this.douyin = true;
          this.txt = res.data.msg;
        }
      });
    },
    chakanfun(item) {
      let routeUrl = this.$router.resolve({
        path: "/mbtext",
        query: {
          id: item.id,
          type:1
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
      this.page = e;
      axios
        .get(`${baseUrl}index/index/articleall`, {
          params: {
            token: localStorage.getItem("login"),
            page: e,
            title: this.input2,
          },
        })
        .then((res) => {
          this.list = res.data.data.data;
        });
    },
    handleSizeChange(e) {
      console.log(e, "12e333");
    },
    onError() {
      this.$message.error("浏览器不支持此功能");
    },
    onCopy(v) {
      this.$message({
        message: "恭喜你，复制成功",
        type: "success",
      });
    },
    quit() {
      localStorage.removeItem("login");
      this.$router.push("/mbhome");
    },
    home() {
      this.$router.push("/mbhome");
    },
  },
};
</script>

<style  scoped>
.search_inp {
  display: flex;
  align-items: center;
}
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
  float: right;
  position: absolute;
  right: 0px;
  bottom: 20px;
  display: flex;
  align-items: center;
}
.right_date {
  color: #999;
  line-height: 40px;
  font-size: 15px;
}
.right_title {
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item_right {
  padding-left: 10px;
  height: 100%;
  flex: 1; 
  width: 80px;
}
.item_left {
  width: 130px;
  height: 100px;
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
  /* float: right;
  /* margin: 3px; 
  margin-left: 50px; */
}
.el-pagination{
    width: 80% !important;
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
.main {
  width: 80%;
  height: 300px;
  background: #fff;
  margin: 20px auto;
  border-radius: 20px;
  position: relative;
}
.useravat img {
  width: 100%;
  height: 100%;
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
</style>