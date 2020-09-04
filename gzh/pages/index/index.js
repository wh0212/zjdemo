import Request from "../../utils/request"
Page({
  data: {
    list: [],
    model: false,
    itemId: null,
    inptxt: "",
    imageUrl: "",
    phoneAct:false,
    userPhone:"",
    bili:[91,90,92,93,94,95]
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
  nomodel(){
    this.setData({
      phoneAct:false
    })
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
    wx.navigateTo({
      url: '/pages/home/ptxq/index?id=' + e.currentTarget.dataset.id,
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail)
    var that = this;
    Request({
      url: "api/Wxlogin/getmoblie",
      method: "get",
      data: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        session_key: wx.getStorageSync('login').session_key,
        token: wx.getStorageSync('login').token,
        member_id: wx.getStorageSync('member_id')
      }
    }).then((res) => {
      console.log(res)
      wx.setStorageSync('phone', res.data.moblie)
      that.setData({
        userPhone: res.data.moblie,
        phoneAct:false
      })
    })
  },
  typept(v) {
    console.log(v,"ddddddd")
    var pt = v.detail.pt == "dy" ? "douyin" : "toutiao";
    var that = this;
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
        imageUrl: url,
        ewmact: v.detail.ewmact
      })
    })
  },
  promotion(v) {
    if (!wx.getStorageSync('phone')) {
      this.setData({
        phoneAct:true
      })
    } else if (!wx.getStorageSync('douyin_id')) {
      wx.showToast({
        title: '还未授权抖音号，请授权',
        icon: 'none'
      })
    } else {
      console.log( v.currentTarget.dataset,"id")
      this.setData({
        itemId: v.currentTarget.dataset.item,
        model: true
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