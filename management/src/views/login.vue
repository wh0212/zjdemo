<template>
  <div class="main">
    <div class="left">
      <img src="../assets/login.png" alt srcset />
    </div>
    <div class="right">
      <div class="right_top">
        <div class="top_left">
          <img class="logo" src="../assets/logo.png" alt srcset />
          <span class="logo_title">快狗推</span>
        </div>
        <div @click="dialogTableVisiblefun" class="top_right">
          <div style="font-size:12px">小程序扫码登录登录</div>
          <span style="font-size:30px" class="iconfont iconerweima"></span>
        </div>
        <el-dialog
          style="text-align:center"
          title="扫码登录"
          :modal="false"
          :visible.sync="dialogTableVisible"
          :before-close="nonefun"
        >
          <img style="width:30%" :src="'https://tgadmin.clvtmcn.cn/'+ermImage" alt srcset />
        </el-dialog>
      </div>
      <div class="data" v-if="showact">
        <div class="title">登录</div>
        <div class="from">
          <el-input
            class="input"
            placeholder="输入用户名"
            prefix-icon="el-icon-user-solid"
            v-model="username"
          ></el-input>
          <el-input
            class="input"
            placeholder="输入密码"
            prefix-icon="el-icon-edit"
            show-password
            v-model="password"
          ></el-input>
          <div class="yzm input">
            <el-input style="width:50%" placeholder="请输入验证码" v-model="yzm" clearable></el-input>
            <img class="ewm" @click="huoqu" :src="numcount" alt />
          </div>
          <el-button @click="addbtn" class="btn" type="primary">登录</el-button>
          <div class="show" @click="show">没有账号，去注册</div>
        </div>
      </div>
      <div v-if="!showact" class="zhuce">
        <div class="title">注册</div>
        <div class="from">
          <el-input
            class="input"
            placeholder="输入手机号"
            prefix-icon="el-icon-user-solid"
            v-model="zc_username"
          ></el-input>
          <el-input
            class="input"
            placeholder="输入密码"
            prefix-icon="el-icon-edit"
            show-password
            v-model="zc_password"
          ></el-input>
          <el-input
            class="input"
            placeholder="确认密码"
            prefix-icon="el-icon-edit"
            show-password
            v-model="zc_password2"
          ></el-input>
          <el-input
            class="input"
            placeholder="输入手机号"
            prefix-icon="el-icon-user-solid"
            v-model="zc_phone"
          ></el-input>
          <div class="yzm input">
            <el-input style="width:50%" placeholder="请输入验证码" v-model="zc_yzm" clearable></el-input>
            <img class="ewm" @click="huoqu" :src="numcount1" alt />
          </div>
          <el-button @click="zc_add" class="btn" type="primary">注册</el-button>
          <div class="show" @click="addzh">已有账号，去登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Request from "../util/http"
const baseUrl = "https://tgadmin.clvtmcn.cn/"
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      yzm: "",
      numcount: `${baseUrl}index/index/verify?num=9`,
      numcount1: `${baseUrl}index/index/verify?num=3`,
      code: 9,
      showact: true,
      zc_username: "",
      zc_password: "",
      zc_password2: "",
      zc_phone: "",
      zc_yzm: "",
      dialogTableVisible: false,
      ermImage: "",
    };
  },
  components: {},
  methods: {
    nonefun() {
      this.dialogTableVisible = false;
      clearInterval(this.interv);
      clearInterval(this.time);
    },
    dialogTableVisiblefun() {
      var that = this;
      axios
        .get(`${baseUrl}index/index/scanCode`, {})
        .then((res) => {
          if (res.data.code == 1) {
            this.dialogTableVisible = true;
            this.ermImage = res.data.data.img_url;
            that.interv = setInterval(() => {
              axios
                .get(`${baseUrl}index/index/islogin`, {
                  params: {
                    token: res.data.data.token,
                  },
                })
                .then((res1) => {
                  if (res1.data.code == 1) {
                    clearInterval(this.interv);
                    window.localStorage.setItem("login", res.data.data.token);
                    this.$router.push("/about");
                  } else if (res1.data.code == -1) {
                    this.dialogTableVisible = false;
                    clearInterval(this.interv);
                    this.$alert("授权失败，请重新扫码授权", "授权状态", {
                      confirmButtonText: "确定",
                    });
                  }
                });
            }, 2000);
            that.time = setTimeout(() => {
              clearInterval(this.interv);
              this.dialogTableVisible = false;
              this.$alert("授权失败，验证超时请重新扫码授权", "授权状态", {
                confirmButtonText: "确定",
              });
            }, 30000);
          } else {
          }
        })
        .catch((e) => {
          
          this.$message({
            message: "失败了",
            type: "warning",
          });
        });
    },
    zc_add() {
      axios
        .get(`${baseUrl}index/index/register`, {
          params: {
            login_account: this.zc_username,
            phone: this.zc_phone,
            pwd: this.zc_password,
            regist_pwd_con: this.zc_password2,
            num: this.code,
            code: this.zc_yzm,
          },
        })
        .then((res) => {
          console.log("11111", res.data.code);
          if (res.data.code == 1) {
           
            this.$message({
              message: "恭喜你，注册成功,去登录吧",
              type: "success",
            });
          } else {
           
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((e) => {
         
          this.$message({
            message: "失败了",
            type: "warning",
          });
        });
    },
    addzh() {
      this.showact = true;
    },
    show() {
      this.showact = false;
    },
    tiaozhuan() {
      let routeUrl = this.$router.resolve({
        name: "About",
      });
      window.open(routeUrl.href, "_blank");
    },
    addbtn() {
      axios
        .get(`${baseUrl}index/index/login`, {
          params: {
            code: this.yzm,
            phone: this.username,
            login_pwd: this.password,
            num: this.code,
          },
        })
        .then((res) => {
         
          window.localStorage.setItem("login", res.data.data.token);
          if (res.data.code == 1) {
            this.$message({
              message: "恭喜你，登录成功",
              type: "success",
            });
            this.$router.push({
              path: "/about",
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
    },
    huoqu() {
      var a = Math.floor(Math.random() * 10000);
      var count = `${baseUrl}index/index/verify?num=${a}`;
      if (this.showact) {
        this.numcount = count;
        this.code = a;
      } else {
        this.numcount1 = count;
        this.code = a;
      }
    },
  },
  beforeDestroy() {
    
    if (this.interv) {
      //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.interv); //关闭
    }
    if (this.time) {
      //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.time); //关闭
    }
  },
};
</script>

<style  scoped>
.show {
  text-align: center;
  color: #999;
  font-size: 15px;
  margin-top: 10px;
}
.ewm {
  width: 130px;
  height: 45px;
}
.logo_title {
  font-weight: 600;
}
.logo {
  width: 80px;
  height: 100px;
}
.left img {
  width: 90%;
  height: 30rem;
}
.btn {
  width: 100%;
  margin: 0 auto;
}
.yzm {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input {
  margin-bottom: 2rem;
}
.title {
  text-align: center;
  line-height: 60px;
  width: 100%;
  font-size: 24px;
}
.data {
  width: 75%;
  margin: 0 auto;
}
.main {
  width: 85%;
  height: 30rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  flex: 1;
}
.right {
  flex: 0.45;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}
.top_left {
  display: flex;
  align-items: center;
}
.top_right {
  display: flex;
  align-items: center;
}
.right_top {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div{
  cursor:pointer
}
</style>