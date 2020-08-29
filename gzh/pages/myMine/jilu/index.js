import Request from "../../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      price:0
  },
  onLoad: function (options) {
    var that = this;
    Request({
      url:"api/Member/pay_log",
      method:"get",
      data:{
        member_id:wx.getStorageSync('member_id'),
        token:wx.getStorageSync('login').token
      }
    }).then((res)=>{
      that.setData({
        list:res.data.data,
        price:res.data.price
      })
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