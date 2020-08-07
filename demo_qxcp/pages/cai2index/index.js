// pages/index/index.js
var app = getApp();
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    act: 1,
    username: "",
    index: "请选择日期",
    datea: '',
    openid:''
  },

  leftact(v) {
    console.log(v.currentTarget.dataset.index)
    if (v.currentTarget.dataset.index == 1) {
      this.setData({
        act: 1
      })
    } else {
      this.setData({
        act: 2
      })
    }
  },
  changeDate: function (e) {
    //获取当前选择日期
    var date = e.detail.value;
    this.setData({
      index: date
    })
  },
  inptxt(v) {
    this.setData({
      username: v.detail.value
    })
  },
  tapbtn() {
    if (this.data.index != '请选择日期' && this.data.username) {
      tt.request({
        url: 'https://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.username
        },
        success: (res) => {
          console.log(res)
          if (res.data.prob == 1) {
            tt.showToast({
              title: '出现违规字',
              icon: 'fail',
              success: (res) => {
                return
              }
            });
          } else {
            var obj = {
              channel: "3",
              appletsName: '测试你近期的财运',
              openid:this.data.openid
            }
            serve("/pages/cai2result/index", obj)
          }
        }
      });

    } else {
      tt.showToast({
        title: '请输入对应内容',
        icon: 'fail'
      });
    }
  },
  onLoad: function (options) {
    if (options.openid) {
      this.setData({
        openid: options.openid
      })
    }
    var myDate = new Date()
    let Y = myDate.getFullYear() //年
    if (myDate.getMonth() + 1 < 10) { //月
      var M = myDate.getMonth() + 1
      M = "0" + M
    } else {
      var M = myDate.getMonth() + 1
    }
    if (myDate.getDate() < 10) { //日
      var D = myDate.getDate()
      D = "0" + D
    } else {
      var D = myDate.getDate()
    }
    myDate = `${Y}-${M}-${D}`//2019-09-23
    this.setData({
      datea: myDate
    })
    shipin(3, '测试你近期的财运',options.openid)
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你近期的财运',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/cai2index/index?from=sharebuttonabc&otherkey=othervalue&id=3', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '2kh936c8dg672h134n',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
  onUnload: function () {
    tt.hideToast();
  }
})