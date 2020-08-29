import Request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    model: false,
    itemId: null,
    inptxt: "",
    imageUrl: ""
  },
  search() {
    var that = this;
    if (!this.data.inptxt) {
      wx.showToast({
        title: '请输入要搜索的内容',
        icon: 'none'
      })
    } else {
      Request({
        url: "api/small/lists",
        method: "get",
        data: {
          name: that.data.inptxt
        }
      }).then((res) => {
        console.log(res.data, "shuzu")
        that.setData({
          list: res.data
        })
        console.log(that.data.list)
      })
    }
  },
  inpchange(v) {
    if (!v.detail.value) {
      var that = this;
      Request({
        url: "api/small/lists",
        method: "get",
      }).then((res) => {
        that.setData({
          list: res.data
        })
      })
    }
    this.setData({
      inptxt: v.detail.value
    })
  },
  activityfun() {
    wx.navigateTo({
      url: '/pages/home/idea/index',
    })
  },
  ptDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/home/ptxq/index?id=' + e.currentTarget.dataset.id,
    })
  },
  typept(v) {
    var pt = v.detail.pt == "dy" ? "douyin" : "toutiao";
    var that = this;
    console.log(that.data.itemId)
    Request({
      url: "api/qrcode/downloadQrcode",
      method: "get",
      data: {
        appid: "tt99eeef5306d4c283",
        id: that.data.itemId,
        member_id: wx.getStorageSync('member_id'),
        token: wx.getStorageSync('login').token,
        type: pt,
        douyin_id: wx.getStorageSync('douyin_id')
      }
    }).then((res) => {
      var url = 'https://tgadmin.clvtmcn.cn/' + res.data.url;
      console.log(url, res)
      that.setData({
        imageUrl: url
      })
    })
    this.setData({
      ewmact: v.detail.ewmact
    })
  },
  promotion(v) {
    if (!wx.getStorageSync('phone')) {
      wx.showToast({
        title: '请在我的页面绑定手机号',
        icon: 'none'
      })
    } else {
      this.setData({
        model: true,
        itemId: v.currentTarget.dataset.item
      })
    }
  },
  fundeatil(v) {
    wx.navigateTo({
      url: `/pages/cp_detail/index?name=${this.data.inptxt}&id=${v.currentTarget.dataset.item.id}`,
    })
  },

  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/small/lists",
      method: "get",
    }).then((res) => {
      that.setData({
        list: res.data
      })
    })
  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  }
})