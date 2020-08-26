var app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    item: {},
    scroll: true,
    openid: ''
  },
  onLoad: function (options) {
    this.setData({
      item: app.globalData.item,
      openid: options.openid
    })
    shipin(this.data.item.title, this.data.item.title, options.openid)
  },
  datafun() {
    var obj = {
      channel: this.data.item.title,
      appletsName: this.data.item.title,
      openid: this.data.openid
    }
    var that = this;
    serve(obj, function () {
      that.setData({
        scroll: false
      })
    })
  },
  onShow() {
    console.log(app.globalData.item, "ddd")
    this.setData({
      item: app.globalData.item
    })
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: this.data.item.title,
      desc: "资讯百宝箱，延伸你的视野！",
      path: `/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=${ this.data.item.title}`, // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '4csdk0ph0k62j48etv',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
})