// pages/detail/index.js
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
  }
})