
import Request from "../../utils/request";
Page({
  data: {
    lenact:true,
    dataItem: {},
    time: '',
    model: false,
    ewmact: false,
    page: 1,
    id: 0,
    name: "",
    itemId: 0,
    imageUrl:""
  },
  addpush() {
    var that = this;
    this.setData({
      page: this.data.page += 1
    })
    Request({
      url: "api/small/pagearticle",
      method: "get",
      data: {
        page: that.data.page,
        class_id: that.data.id,
        name: that.data.name
      }
    }).then((res) => {
      if (res.data.data.length == 0) {
        that.setData({
          lenact:false
        })
      }
      that.setData({
        'dataItem.children': [...that.data.dataItem.children, ...res.data.data]
      })
    })
  },
  typept(v) {
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
      wx.showToast({
        title: '请在我的页面绑定手机号',
        icon: 'none'
      })
    } else {
      this.setData({
        itemId: v.currentTarget.dataset.item,
        model: true
      })
    }
  },
  changeDate(v) {
    this.setData({
      time: v.detail.value
    })
  },
  onLoad(v) {
    this.setData({
      id: v.id,
      name: v.name == undefined ? '' : v.name
    })
    var that = this;
    Request({
      url: "api/small/lists",
      method: "get",
      data: {
        class_id: v.id,
        name: v.name == undefined ? '' : v.name
      }
    }).then((res) => {
      console.log(res)
      this.setData({
        dataItem: res.data[0]
      })
    })
    var date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    this.setData({
      time: `${year}-${month}-${day}`
    })
  }
});