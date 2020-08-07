// pages/mine/index.js
Page({
  data: {
    user:{},
    ind:1
  },
  onLoad: function (options) {
    this.setData({
      user:tt.getStorageSync('user')
    })
  },
  activefun(v){
    console.log(v.currentTarget.dataset.index)
    this.setData({
      ind:v.currentTarget.dataset.index
    })
  },
  index(){
    tt.reLaunch({
      url: '/pages/home/index' // 指定页面的url
    });
  },
  onShow(){
    this.setData({
      user:tt.getStorageSync('user')
    })
  }
})