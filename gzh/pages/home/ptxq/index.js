import Request from "../../../utils/request"
Page({
  data: {
    act: true,
    item: {}
  },
  onLoad: function (options) {
    if (options.type) {
      this.setData({
        act: false
      })
      var that = this;
      Request({
        url: "api/small/announcementDetails",
        method: "get",
        data: {
          id: options.type
        }
      }).then((res) => {
        console.log(res.data)
        that.setData({
          item: res.data
        })
      })

    } else {
      this.setData({
        act: true
      })
    }
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})