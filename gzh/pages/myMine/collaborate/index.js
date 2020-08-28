import Request from "../../../utils/request";
Page({
  data: {
    inptxt: "",
    phone: "",
    wxtxt: "",
    teare: ""
  },
  addbtn() {
    let { inptxt, phone, wxtxt, teare } = this.data;
    if (!inptxt || !phone || !wxtxt || !teare) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
    } else {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
        wx.showToast({
          title: '手机号格式错误',
          icon: 'none'
        })
        return
      }
      console.log(this.data)
    }
  },
  inpchange(e) {
    this.setData({
      inptxt: e.detail.value
    })
  },
  phonechange(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  wxchange(e) {
    this.setData({
      wxtxt: e.detail.value
    })
  },
  tearechange(e) {
    this.setData({
      teare: e.detail.value
    })
  },
  onLoad: function (options) {

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