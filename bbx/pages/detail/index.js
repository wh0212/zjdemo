var app = getApp()
// import serve from "../../ults/video.js"
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
    shipinAct: 0,
    member_id: 0,
    act: 0
  },

  viewTouchMove(e) {
    var height = tt.getSystemInfoSync().windowHeight;
    var width = tt.getSystemInfoSync().windowWidth;
    var left = width - e.touches[0].clientX * 2 + 280;
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
    app.globalData.currentPage = this;

    this.jiancha()
    console.log(options, "123123")
    var bfb = ['51%', '50%', '46%', '45%', '48%', '53%', '47%', '52%', '53%', '53%', '54%', '55%', '56%', '57%']
    var pos = Math.round(Math.random() * (bfb.length - 1))
    tt.setStorageSync('typeId', options.type);
    this.setData({
      id: options.type,
      title: options.title,
      bfbtxt: bfb[pos],
      itemId: options.itemId,
      member_id: options.member_id,
      act: options.act
    })
    console.log(this.data.itemId)
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

    if (options.act) {
      shipin(options.itemId, options.itemId, options.act, options.member_id, options.douyin_id)
    }
  },
  jiancha() {
    var that = this;
    tt.getSystemInfo({
      success: (res) => {
        if (res.appName == 'Toutiao') {
          console.log("头条")
          that.setData({
            shipinAct: 0
          })
        } else if (res.appName == 'Douyin') {
          console.log("抖音")
          that.setData({
            shipinAct: 1
          })
          tt.getSystemInfo({
            success: (res) => {
              if (res.platform == 'android') {
                if (parseFloat(res.version) > 10.3) {
                } else {
                  tt.showModal({
                    title: "提示",
                    content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。",
                  });
                }
              } else {
                if (parseFloat(res.version) > 10.7) {

                } else {
                  tt.showModal({
                    title: "提示",
                    content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。",
                  });
                }
              }
            }
          })
        }
      }
    })
  },
  errcancelAdFunction() {
    var that = this;
    tt.showToast({
      title: "请稍等",
      icon: "loading",
      duration: 2000,
      success(res) {
        that.setData({
          scroll: false
        })
      },
      fail(res) {
        console.log(`showToast调用失败`);
      },
    });
  },
  //广告监听
  closeAdFunction() {
    console.log('播放结束')
    var that = this;
    var obj = {
      channel: this.data.openid,
      appletsName: this.data.itemId,
      act: this.data.act
    }
    if (this.data.shipinAct == 1) {
      tt.showToast({
        title: "请稍等",
        icon: "loading",
        duration: 2000,
        success(res) {
          tt.request({
            url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
            method: "post",
            data: {
              act: obj.act,
              appletsName: obj.appletsName,
              type: 1,
              appid: 'tt99eeef5306d4c283'
            },
            success: (res) => {
              console.log(res, 222)
              that.setData({
                scroll: false
              })
            }
          });

        },
        fail(res) {
          console.log(`showToast调用失败`);
        },
      });
    } else {
      tt.showToast({
        title: "请稍等",
        icon: "loading",
        duration: 2000,
        success(res) {
          setTimeout(() => {
            that.setData({
              scroll: false
            })
          }, 2000)
        },
        fail(res) {
          console.log(`showToast调用失败`);
        },
      });
    }

  },
  cancelAdFunction() {
    console.log('用户取消')
    tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
  },
  datafun() {
    console.log(111)
    var obj = {
      channel: this.data.openid,
      appletsName: this.data.itemId,
      act: this.data.act
    }
    app.playAd()
    // var that = this;
    // serve(obj, function () {
    //   that.setData({
    //     scroll: false
    //   })
    // })
  },
  onHide() {
    console.log("离开")

  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: this.data.item.title,
      desc: this.data.item.title,
      path: `/pages/detail/index?from=sharebuttonabc&otherkey=othervalue&id=${this.data.itemId}&itemId=${this.data.itemId}&act=${this.data.act}`,
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