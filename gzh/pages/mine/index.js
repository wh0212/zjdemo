// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    model: false,
    phoneAct:false
  },
  bindGetUserInfo(v) {
    console.log(v.detail.userInfo)
    wx.setStorageSync('userinfo', v.detail.userInfo)
    this.setData({
      model: false,
      userinfo: v.detail.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: (res) => {
        console.log(res.authSetting['scope.userInfo'])
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            model: true
          })
        }
      }
    })
    wx.login({
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userinfo: wx.getStorageSync('userinfo')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})