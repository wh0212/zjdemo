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
      <el-form ref="form" label-position="left" label-width="80px">
        <el-form-item label="*第一步">
          <div>
            <div class="txt">微信搜索“资讯百宝箱”,点击进入小程序</div>
            <img style="width:20%" src="https://img.kuaigoutui.com/tttt/bbb.jpg" alt srcset />
          </div>
        </el-form-item>
        <el-form-item label="*第二步">
          <div>
            <div class="txt">点击绑定手机号</div>
            <img style="width:20%" src="https://img.kuaigoutui.com/cccccc.jpg" alt srcset />
          </div>
        </el-form-item>
        <el-form-item label="*第三步">
          <div>
            <div class="txt">点击绑定抖音号，长按保存图片后，打开抖音，点击上方的搜一搜，扫码保存到手机相册的二维码</div>
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/dddddd.jpg"
              alt
            />
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/eeeeee.jpg"
              alt
            />
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/ffffff.jpg"
              alt
            />
            <img style="width:20%" src="https://img.kuaigoutui.com/gggggg.jpg" alt />
          </div>
        </el-form-item>
        <el-form-item label="*第四步">
          <div>
            <div class="txt">同意授权，绑定成功，接着我们就可以返回微信，进入小程序，点击首页您可以选择合适您的产品进行推广</div>
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/hhhhhh.jpg"
              alt
            />
            <img style="width:20%" src="https://img.kuaigoutui.com/iiiiii.jpg" alt />
          </div>
        </el-form-item>
        <el-form-item label="*第五步">
          <div>
            <div class="txt">如何下载二维码推广？首先，选择一个小程序，这里您可以搜索您想要的内容，也可以浏览选择合适的下载二维码</div>
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/jjjjjj.jpg"
              alt
            />
            <img style="width:20%" src="https://img.kuaigoutui.com/kkkkkk.jpg" alt />
          </div>
        </el-form-item>
        <el-form-item label="*第六步">
          <div>
            <div class="txt">选择合适的二维码下载保存到手机后，打开抖音扫码，点击打开小程序，就能看到所选的文章，点击右上方的拍视频上传或者拍摄视频即可</div>
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/llllll.jpg"
              alt
            />
            <img style="width:20%" src="https://img.kuaigoutui.com/mmmmmm.jpg" alt />
          </div>
        </el-form-item>
        <el-form-item label="*第七步">
          <div>
            <div class="txt">文章的标题将会作为小程序的锚点出现在视频左下方，请注意图文一定要相结合！</div>
            <img
              style="width:20%;margin-right:10px"
              src="https://img.kuaigoutui.com/nnnnnn.jpg"
              alt
            />
            <img style="width:20%" src="https://img.kuaigoutui.com/qqqqqq.jpg" alt />
          </div>
        </el-form-item>
        <el-form-item label="帮助">
          <div>
            <div class="txt">如果在小程序中没有找到合适您的推广文章内容，到我们的官网：
              www.kuaigoutui.com“个人中心”去编辑跟您视频内容相匹配的文章，
              上传到我们的小程序上，也可以联系我们，我们帮您编辑，然后再到小程序中进行推广。
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Request from "../util/http";
export default {
  data() {
    return {
      userinfo: {},
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
  },
  methods: {
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
.txt{
  font-size: 17px;
  margin-bottom: 10px;
}
.main {
  width: 80%;
  margin: 20px auto;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
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