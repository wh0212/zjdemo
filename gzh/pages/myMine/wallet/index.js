import Request from "../../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: {},
    zsy: 0,
    yue: 0
  },
  tixian() {
    if (this.data.yue == 0) {
      wx.showToast({
        title: '余额不足无法提现',
      })
    } else {
      var that = this;
      Request({
        url: "api/Bankcard/pay",
        method: "get",
        data: {
          pay_type: 1,
          id: 1,
          price: that.data.yue,
          token: wx.getStorageSync('login').token
        }
      }).then((res) => {
        wx.showToast({
          title: '提现成功',
        })
        Request({
          url: "api/Member/monthprice",
          method: "get",
          data: {
            member_id: wx.getStorageSync('member_id'),
            token: wx.getStorageSync('login').token
          }
        }).then((res) => {
          console.log(res.data)
          that.setData({
            money: res.data
          })
        })
      })
    }
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      zsy: options.shouyi,
      yue: options.yue
    })
    var that = this;
    Request({
      url: "api/Member/monthprice",
      method: "get",
      data: {
        member_id: wx.getStorageSync('member_id'),
        token: wx.getStorageSync('login').token
      }
    }).then((res) => {
      console.log(res.data)
      that.setData({
        money: res.data
      })
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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