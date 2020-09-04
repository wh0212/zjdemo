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
    <div class="main">
      <div class="list_title">
        <span>收益</span>
      </div>
      <div class="main_sy">
        <div>总收益:{{sy.price}}</div>
        <div>可提现收益:{{sy.tixian_price}}</div>
        <div>预估收益:{{sy.yugu_price}}</div>
        <div>昨日收益:{{sy.zuori_price}}</div>
      </div>
      <div style="margin-top:20px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date_time" label="日期" width="180"></el-table-column>
          <el-table-column prop="nickname" label="姓名" width="180"></el-table-column>
          <el-table-column prop="moblie" label="手机号"></el-table-column>
          <el-table-column prop="price" label="收益"></el-table-column>
        </el-table>
        <div style="float:right">
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
  </div>
</template>

<script>
import axios from "axios";
import Request from "../util/http";
export default {
  data() {
    return {
      userinfo: {},
      page: 1,
      sy: {},
      tableData: [],
      num: 0,
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
    });
    // axios
    //   .get("https://www.kuaigoutui.com/index/index/personal", {
    //     params: {
    //       token: localStorage.getItem("login"),
    //       page: 1,
    //     },
    //   })
    //   .then((res) => {
    //     this.userinfo = res.data.data.user;
    //   });
    Request({
      url: "index/member/memberinfo",
      method: "get",
      params: {
        token: localStorage.getItem("login"),
      },
    }).then((res) => {
      this.sy = res.data.data;
    });
    // axios
    //   .get("https://www.kuaigoutui.com/index/member/memberinfo", {
    //     params: {
    //       token: localStorage.getItem("login"),
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.data);
    //     this.sy = res.data.data;
    //   });
    Request({
      url: "index/member/info",
      method: "get",
      params: {
        token: localStorage.getItem("login"),
        page: 1,
      },
    }).then((res) => {
      this.tableData = res.data.data.data;
      this.num = res.data.data.num;
    });

    // axios
    //   .get("https://www.kuaigoutui.com/index/member/info", {
    //     params: {
    //       token: localStorage.getItem("login"),
    //       page: 1,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.data);
    //     this.tableData = res.data.data.data;
    //     this.num = res.data.data.num;
    //   });
  },
  methods: {
    handleCurrentChange(e) {
      this.page = e;
      Request({
        url: "index/member/info",
        method: "get",
        params: {
          token: localStorage.getItem("login"),
          page: e,
        },
      }).then((res) => {
        this.tableData = res.data.data.data;
      });
      //   axios
      //     .get("https://www.kuaigoutui.com/index/member/info", {
      //       params: {
      //         token: localStorage.getItem("login"),
      //         page: e,
      //       },
      //     })
      //     .then((res) => {
      //       this.tableData = res.data.data.data;
      //     });
    },
    handleSizeChange(e) {},
    home() {
      this.$router.push("/home");
    },
    quit() {
      localStorage.removeItem("login");
      this.$router.push("/home");
    },
  },
};
</script>


<style  scoped>
.main_sy {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.list_title {
  border-bottom: 1px #c2c2cc solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  margin: 20px auto;
  padding: 20px;
  padding-bottom: 50px;
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
  justify-content: space-around;
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