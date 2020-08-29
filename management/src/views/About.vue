<template>
  <div class="about">
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
    <!--     
    <div class="main">
      <div class="main_title">
        <div class="da_avatr">
          <img :src="userinfo.avatar" alt />
        </div>
      </div>
      <div class="usertxt">
        <div class="username">{{userinfo.nickname}}</div>
        <div class="bjzl">编辑个人资料</div>
      </div>
    </div>-->
    <!--  -->
    <div class="list">
      <div class="list_title">
        <span>文章</span>
        <span @click="text" style="color:#2489f1">写文章</span>
      </div>
      <div class="list_main">
        <div v-for="(item,index) in list" :key="index" class="list_item">
          <img class="item_left" :src="item.image" alt />
          <div class="item_right">
            <div class="right_title">{{item.title}}</div>
            <div class="right_date">{{item.add_time}}</div>
          </div>
          <div class="chakan" @click="chakanfun(item)">查看详情</div>
        </div>
      </div>
      <div class="fenye">
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
export default {
  data() {
    return {
      page: 1,
      userinfo: {},
      list: [],
      num:0
    };
  },
  mounted() {
    axios
      .get("https://tgadmin.clvtmcn.cn/index/index/personal", {
        params: {
          token: localStorage.getItem("login"),
          page: 1,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.userinfo = res.data.data.user;
        this.list = res.data.data.article.data;
        this.num=res.data.data.num
      });
  },
  methods: {
    chakanfun(item) {
      console.log(item);
      let routeUrl = this.$router.resolve({
        name: "text",
        query: {
          id: item.id,
        },
      });
      window.open(routeUrl.href, "_blank");
    },
    text() {
      let routeUrl = this.$router.resolve({
        name: "text",
      });
      window.open(routeUrl.href, "_blank");
    },
    handleCurrentChange(e) {
      console.log(e, "123");
      this.page = e;
      axios
        .get("https://tgadmin.clvtmcn.cn/index/index/personal", {
          params: {
            token: localStorage.getItem("login"),
            page: e,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.userinfo = res.data.data.user;
          this.list = res.data.data.article.data;
        });
    },
    handleSizeChange(e) {
      console.log(e, "12e333");
    },
  },
};
</script>

<style  scoped>
.chakan {
  background: rgb(209, 17, 17);
  color: #fff;
  padding: 5px 10px;
  float: right;
  position: absolute;
  right: 20px;
}
.right_date {
  color: #999;
  line-height: 40px;
}
.right_title {
  font-size: 20px;
}
.item_right {
  padding-left: 20px;
  height: 100%;
}
.item_left {
  width: 150px;
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
  float: right;
  margin: 20px;
}
.list_title {
  padding: 20px;
  border-bottom: 1px #c2c2cc solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list {
  width: 80%;
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
