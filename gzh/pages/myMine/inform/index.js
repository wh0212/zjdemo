import Request from "../../../utils/request";
Page({

  data: {
    xzact: 0,
    list:[]
  },
  itemfun(v){
    console.log(v.currentTarget.dataset.item)
    wx.navigateTo({
      url: `/pages/home/ptxq/index?type=1`,
    })
  },
  xuanzefun(v) {
    this.setData({
      xzact: v.currentTarget.dataset.index
    })
  },
  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/Small/announcement",
      method: "get",
      data: {
        token: wx.getStorageSync('login').token
      }
    }).then((res) => {
      console.log(res.data)
      that.setData({
        list: res.data
      })
    })
  },

  onReady: function () {

  },

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