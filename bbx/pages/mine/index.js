Page({
  data: {
    showmodel: false,
    navActive: 0,
    prom: {
      txt: '',
      yzm: ''
    },
    num: 0,
    openid: '',
    pull: {
      isLoading: false,
      pullText: ''
    },
    downTop: false,
    rgb: 'rgb(0,154,97)',//初始值
    pick: false
  },
  // 显示取色器
  toPick: function () {
    this.setData({
      pick: true
    })
  },
  rgb2hex(color) {
    let rgb = color.split(',');
    let R = parseInt(rgb[0].split('(')[1]);
    let G = parseInt(rgb[1]);
    let B = parseInt(rgb[2].split(')')[0]);
    let hex = "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
    return hex;
  },
  //取色结果回调
  pickColor(e) {
    console.log(e)
    let rgb = e.detail.color;
    tt.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: this.rgb2hex(e.detail.color),
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log("setNavigationBarColor调用失败");
      },
    });
    this.setData({
      rgb: rgb
    })
  },
  amend() {

  },
  hidemodel() {
    this.setData({
      showmodel: false
    })
  },
  showmodelfun() {
    this.setData({
      showmodel: true
    })
  },
  refresh(e) {
    this.setData({
      'pull.isLoading': true,
      'pull.pullText': '',
      page: 1
    })
    setTimeout(() => {
      this.setData({
        'pull.pullText': ''
      })
    }, 800)
    setTimeout(() => {
      this.setData({
        'pull.isLoading': false,
      })
    }, 800)
  },
  onDown(e) {
    this.setData({
      downTop: e.detail.onDown
    })
  },
  onLoad: function (options) {
    this.setData({
      userinfo: tt.getStorageSync('userInfo'),
      openid: options.openid
    })
  },
  onShow() {

  },
  onShareAppMessage(option) {
    return {
      title: "资讯百宝箱",
      desc: "资讯百宝箱，延伸你的视野！",
      path: `/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=资讯百宝箱`,
      // imageUrl: '',
      templateId: '4csdk0ph0k62j48etv',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  }
})