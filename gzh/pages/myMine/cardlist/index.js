import Request from "../../../utils/request";
Page({
  data: {
    kalist: [],
    zfblist: [],
    act: false,
    indexa: null
  },
  active(v) {
    if (this.data.indexa == null) {
      this.setData({
        act: !this.data.act,
        indexa: v.currentTarget.dataset.index
      })
    }else{
      this.setData({
        indexa:null
      })
    }
  },
  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/Bankcard/pay_list",
      method: "get",
      data: {
        member_id: wx.getStorageSync('member_id'),
        token: wx.getStorageSync('login').token
      }
    }).then((res) => {
      console.log(res,"11")
      if(res.code==-1){
        wx.reLaunch({
          url: '/pages/mine/index?code=-1',
        })
      }
      that.setData({
        kalist: res.data.bank_card,
        zfblist: res.data.alipay
      })
    })
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