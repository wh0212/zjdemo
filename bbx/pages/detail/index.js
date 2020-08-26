var app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
import Request from "../../ults/http.js"
Page({
  data: {
    item: {},
    scroll: true,
    openid: '',
    screenWidth: 0,
    screenHeight: 0,
    list: [],
    id: '', //类型名称
    title: '',
    date: '',
    navList: [],
    erItem: {},
    bfbtxt: "52%",
    itemId: 0,
    right: 0,
    bottom: 58,
    shipinAct:1
  },
  viewTouchMove(e) {
    var height = tt.getSystemInfoSync().windowHeight;
    var width = tt.getSystemInfoSync().windowWidth;
    var left = width - e.touches[0].clientX * 2 +280;
    var top = e.touches[0].clientY * 2 - 30;
    if (left > tt.getSystemInfoSync().windowWidth * 2 - 160) {
      left = tt.getSystemInfoSync().windowWidth * 2 - 160
    } else if (top > height * 2 - 90) {
      top = height * 2 - 90
    } else if (left < 1) {
      left = 0
    } else if (top < 1) {
      top = 1
    }
    this.setData({
      right: left,
      bottom: top
    })
  },
  detail(v) {
    var obj = v.currentTarget.dataset.item;
    console.log(obj, tt.getStorageSync('typeId'), "第二次")
    this.setData({
      erItem: obj
    })
    tt.redirectTo({
      url: `/pages/detail/index?itemId=${obj.id}`
    });
  },
  onLoad: function (options) {
    console.log(options, "123123")
    var bfb = ['51%', '50%', '46%','45%', '48%', '53%', '47%', '52%', '53%', '53%', '54%', '55%', '56%', '57%']
    var pos = Math.round(Math.random() * (bfb.length - 1))
    tt.setStorageSync('typeId', options.type);
    this.setData({
      id: options.type,
      title: options.title,
      bfbtxt: bfb[pos],
      itemId: options.itemId,
      shipinAct:app.globalData.gender
    })
    Request({
      url: '/article/articleInfo',
      method: 'GET',
      data: {
        id: options.itemId
      }
    }).then((res) => {
      var details = res.data.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"');
      res.data.detail = details;
      this.setData({
        item: res.data,
        openid: options.openid
      })
      Request({
        url: '/article/search',
        method: 'GET',
        data: {
          title: '',
          page: 1,
          article_class_id: res.data.type_id
        }
      }).then((res) => {
        this.setData({
          list: res.data.data
        })
      })
    })
    if (options.openid) {
      shipin(options.itemId, options.itemId, options.openid)
    }
  },
  datafun() {
    var obj = {
      channel: this.data.openid,
      appletsName: this.data.itemId,
      openid: this.data.openid
    }
    var that = this;
    serve(obj, function () {
      that.setData({
        scroll: false
      })
    })
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: this.data.item.title,
      desc: this.data.item.title,
      path: `/pages/detail/index?from=sharebuttonabc&otherkey=othervalue&id=${this.data.item.title}&itemId=${this.data.item.id}`,
      // imageUrl: '',
      templateId: '4csdk0ph0k62j48etv',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
})