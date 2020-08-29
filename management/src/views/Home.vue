<template>
  <div class="home">
    <div class="top">
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
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="swiper" id="swiper">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
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
            <img src="../assets/-42-47.png" alt />
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
            <el-button class="zhuce" type="primary" round>免费注册体验</el-button>
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
            <div>小程序</div>
            <div>商学院</div>
            <div>人脉圈</div>
            <div>短视频</div>
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
export default {
  name: "Home",
  components: {},
  data() {
    return {
      act: true,
      navlist: ["首页", "产品介绍", "关于我们", "个人中心"],
    };
  },
  methods: {
    home(v) {
      console.log(v);
      if (v == 0) {
        var PageId = document.querySelector("#swiper");
        window.scrollTo({
          top: PageId.offsetTop,
          behavior: "smooth",
        });
      } else if (v == 1) {
        var PageId = document.querySelector("#fuwu");
        window.scrollTo({
          top: PageId.offsetTop - 100,
          behavior: "smooth",
        });
      } else if (v == 2) {
        var PageId = document.querySelector("#about");
        window.scrollTo({
          top: PageId.offsetTop - 100,
          behavior: "smooth",
        });
      } else {
        let routeUrl = this.$router.resolve({
          path: "/login",
        });
        window.open(routeUrl.href, "_blank");
      }
    }
  },
};
</script>

<style  scoped>
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
  margin-right: 20px;
  text-align: center;
  line-height: 100px;
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
  background: #0d0d0d;
  width: 100%;
  height: 600px;
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
  background: rgb(187, 40, 40);
}
.act {
  font-weight: 600;
}
.nav_item {
  margin: 0px 2rem;
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
  color: #fff;
}
.top {
  width: 100%;
  height: 6rem;
  background: #0d0d0da8;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  z-index: 9999;
}
.home {
  width: 100%;
}
</style>
