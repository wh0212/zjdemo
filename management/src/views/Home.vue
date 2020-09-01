<template>
  <div class="home">
    <!-- <Erwm/> -->
    <div class="model">
      <img style="width:100%" src="https://tgadmin.clvtmcn.cn/upload/img/gzh.jpg" alt srcset />
    </div>
    <div class="top" :style="{background:(navact? '#fff':'rgba(255, 255, 255, 0.574)')}">
      <div class="nav">
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="nav_list">
          <div
            class="nav_item"
            v-for="(item,index) in navlist"
            :key="index"
            @click="home(index)"
            :style="{fontWeight:(homeNav==index?'600':'500')}"
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="swiper" id="swiper">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item>
          <img class="swiper_img" src="../assets/banner.png" alt srcset />
        </el-carousel-item>
        <el-carousel-item>
          <img class="swiper_img" src="../assets/banner2.png" alt srcset />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 服务 -->
    <div class="fuwu" id="fuwu" ref="appContainer">
      <div class="fuwu_main">
        <div class="fuwu_title">
          <div style="width:30px;height:30px;background:#e1caf3"></div>
          <div>我们提供的服务内容</div>
          <div style="width:30px;height:30px;background:#e1caf3"></div>
        </div>
        <div class="fuwu_ti">加入我们不止获得推广权限</div>
        <div class="fuwu_count">
          <div class="fuwu_left">
            <img src="../assets/shouji.png" alt />
          </div>
          <div class="fuwu_count_right">
            <div class="right_title">短视频+小程序</div>
            <div style="width:60px;height:10px;background:#3192ff;border-radius: 10px;"></div>
            <div class="right_ti">让你的短视频更有价值</div>
            <div style="line-height:30px">
              本小程序一科普信息知识为主，主要针对短视频内容里边的知识点进行延伸扩展，让用户在获取视频信息咨询的同时，
              能够丰富视频里面延伸出来的知识，扩展视野，让用户在观看视频的同时，做到视频，图文相结合的信息高效获取。
            </div>
            <div class="ljxcx">了解小程序>></div>
            <el-button @click="home(3)" class="zhuce" type="primary" round>免费注册体验</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 小程序 -->
    <div class="xcx_count">
      <div class="xcx_main">
        <div class="xcx_left">
          <div class="xcx_title">打造专属自己的短视频小程序生态</div>
          <div class="xcx_txt">
            注册快狗推，获取小程序推广权限，可以在平台选择相关的小程序挂载自己的短视频上，也可以选择自己上传想要挂载的内容，再从平台获取
            挂载，有用户点击小程序进去使用小程序，需要观看15~30秒广告，广告收益会实时分到你的快狗推账号上，佣金提现到支付宝，微信，银行卡。
          </div>
          <div class="xcx_xq">
            <div>
              <el-tooltip effect="light" placement="top">
                <div slot="content">
                  <img src="https://tgadmin.clvtmcn.cn/upload/img/gzh.jpg" alt srcset />
                </div>
                <div>微信小程序</div>
              </el-tooltip>
            </div>
            <div>
              <el-tooltip effect="light" placement="top">
                <div slot="content">
                  <img src="http://img.kuaigoutui.com/537eac22118117557c569998f305542.jpg" alt srcset />
                </div>
                <div>微信公众号</div>
              </el-tooltip>
            </div>
            <div>
              <el-tooltip effect="light" placement="top">
                <div slot="content">
                  <img style="width:240px" src="https://microapp.bytedance.com/api/v1/app/tt99eeef5306d4c283/current/qrcode" alt="" srcset="">
                </div>
                <div>抖音小程序</div>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="xcx_right"></div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about" id="about">
      <div class="fuwu_title">
        <div style="width:30px;height:30px;background:#e1caf3"></div>
        <div>关于我们</div>
        <div style="width:30px;height:30px;background:#e1caf3"></div>
      </div>
      <div class="about_txt">
        快狗推专注于短视频生态打造，整合短视频领域流浪，提升用户观看体验感，在不影响短视频内容的同时进行变现服务。
        快狗推致力于短视频内容的扩展，根据短视频内容的特点进行小程序内容创作，分别有影视资讯，科普知识，汽车，美食，体育等，
        满足各种投放需求，让短视频内容得以扩展，流量价值得以充分体现，实现最大化收益。
      </div>
    </div>
  </div>
</template>

<script>
// import Erwm from "../components/erwm"
export default {
  name: "Home",
  components: {
    // Erwm
  },
  data() {
    return {
      act: true,
      navlist: ["首页", "产品介绍", "关于我们", "个人中心"],
      navact: false,
      homeNav: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 500) {
        this.navact = true;
      } else {
        this.navact = false;
      }
    },
    home(v) {
      console.log(v);
      this.homeNav = v;
      if (v == 0) {
        var PageId = document.querySelector("#swiper");
        window.scrollTo({
          top: PageId.offsetTop,
          behavior: "smooth",
        });
        this.navact = false;
      } else if (v == 1) {
        var PageId = document.querySelector("#fuwu");
        window.scrollTo({
          top: PageId.offsetTop - 100,
          behavior: "smooth",
        });
        this.navact = true;
      } else if (v == 2) {
        var PageId = document.querySelector("#about");
        window.scrollTo({
          top: PageId.offsetTop - 100,
          behavior: "smooth",
        });
        this.navact = true;
      } else {
        if (localStorage.getItem("login")) {
          let routeUrl = this.$router.resolve({
            path: "/about",
          });
          window.open(routeUrl.href, "_blank");
        }
        let routeUrl = this.$router.resolve({
          path: "/login",
        });
        window.open(routeUrl.href, "_blank");
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>

<style  scoped>
.model {
  position: fixed;
  right: 30px;
  top: 60%;
  background: red;
  z-index: 99999999999999999;
  width: 100px;
  height: 100px;
}
.erwm {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  /* 定位父级的50% */
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99099;
  background: #fff;
  border-radius: 20px;
}
.swiper_img {
  width: 100%;
  height: 100%;
}
.about_txt {
  margin-top: 50px;
  line-height: 30px;
  color: #999;
}
.about {
  width: 80%;
  margin: 0 auto;
  height: 400px;
}
.xcx_xq div {
  width: 100px;
  height: 100px;
  background: #2067ff;
  color: #fff;
  border-radius: 50%;
  margin-right: 50px;
  text-align: center;
  line-height: 100px;
}
.xcx_xq div:nth-child(3){
  margin-right: 0px;
}
.xcx_xq {
  margin-top: 90px;
  display: flex;
  align-items: center;
}
.xcx_txt {
  line-height: 30px;
  margin-top: 30px;
}
.xcx_title {
  line-height: 80px;
  color: #fff;
  font-weight: 550;
  font-size: 26px;
}
.xcx_left {
  flex: 0.4;
  height: 80%;
  color: #fff;
}
.xcx_right {
  flex: 0.5;
  height: 80%;
}
.xcx_main {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.xcx_count {
  width: 100%;
  height: 600px;
  background: url("../assets/bj.jpg") no-repeat;
  background-size: 100% 100%;
}
.fuwu_left {
  flex: 0.5;
  text-align: center;
  height: 85%;
}
.fuwu_left img {
  height: 100%;
  margin-top: 0px;
}
.zhuce {
  margin-top: 30px;
}
.ljxcx {
  color: #3192ff;
  font-size: 14px;
}
.right_ti {
  line-height: 80px;
}
.right_title {
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 30px;
}
.fuwu_count_right {
  flex: 0.5;
  height: 85%;
}
.fuwu_count {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fuwu_ti {
  text-align: center;
}
.fuwu_title {
  text-align: center;
  width: 40%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-weight: 550;
  font-size: 25px;
}
.fuwu_main {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.fuwu {
  width: 100%;
  height: 600px;
}
.swiper {
  width: 100%;
  height: 650px;
  position: relative;
}
.act {
  font-weight: 600;
}
.nav_item {
  margin: 0px 2rem;
  cursor: pointer;
}
.nav_list {
  margin-left: 5rem;
  width: 80%;
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  width: 80px;
  height: 100px;
}
.nav {
  width: 80%;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
}
.top {
  width: 100%;
  height: 6rem;
  background: rgba(255, 255, 255, 0.574);
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  z-index: 9999;
}
.home {
  width: 100%;
}
div {
  cursor: pointer;
}
</style>
