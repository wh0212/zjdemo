// pages/ranking/index.js
Page({
  data: {
    title: ''
  },
  onLoad: function (options) {
    console.log(options.title)
    this.setData({
      title: options.title
    })
  }
})