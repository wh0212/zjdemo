Page({
  data: {
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