// pages/suanshu/index.js
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
var app = getApp()
Page({
  data: {
    countDown: 3,
    active: false,
    shicount: 8,
    secwidth: 100,
    openid: 0,
    list: [
      {
        count: '1+10',
        daan: 11,
        act: true
      },
      {
        count: '1+1',
        daan: 4,
        act: false
      },
      {
        count: '1+2',
        daan: -4,
        act: false
      },
      {
        count: '4+2',
        daan: 2,
        act: false
      },
      {
        count: '4+9',
        daan: 13,
        act: true
      },
      {
        count: '4+5',
        daan: 9,
        act: true
      },
      {
        count: '-4+5',
        daan: 9,
        act: false
      },
      {
        count: '-2+15',
        daan: 13,
        act: true
      },
      {
        count: '6+5',
        daan: 13,
        act: false
      },
      {
        count: '-6+5',
        daan: 1,
        act: false
      },
      {
        count: '-2+-5',
        daan: -7,
        act: true
      },
      {
        count: '-2+3',
        daan: 1,
        act: true
      },
      {
        count: '-4+3',
        daan: 1,
        act: false
      },
      {
        count: '-14+3',
        daan: 11,
        act: false
      },
      {
        count: '-5+13',
        daan: 8,
        act: true
      },
      {
        count: '5×7-7',
        daan: 28,
        act: true
      },
      {
        count: '7-8×2',
        daan: 2,
        act: false
      },
      {
        count: '1+8×2',
        daan: 18,
        act: false
      },
      {
        count: '18+18',
        daan: 36,
        act: true
      },
      {
        count: '25+16',
        daan: 41,
        act: true
      }, {
        count: '25+16',
        daan: 43,
        act: false
      }, {
        count: '21×6',
        daan: 116,
        act: false
      }, {
        count: '13+24',
        daan: 37,
        act: true
      }, {
        count: '17+24',
        daan: 41,
        act: true
      }, {
        count: '16+19',
        daan: 36,
        act: false
      },
      {
        count: '13+18',
        daan: 32,
        act: false
      },
      {
        count: '33+49',
        daan: 82,
        act: true
      }, {
        count: '23+44',
        daan: 67,
        act: true
      }, {
        count: '25+44*2',
        daan: 113,
        act: true
      },
      {
        count: '27+14*3',
        daan: 68,
        act: false
      },
    ],
    ticount: 0,//题目
    model: false,
    timucount: 1,
    timer2: {}
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '知识星球大挑战',
      desc: "我通关啦！快来看看你能闯到哪",
      path: '/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=0', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '1beecc0ql9d238i7n0',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
  videofun() {
    var obj = {
      channel: "shuxue",
      appletsName: '算数小超人',
      openid: this.data.openid
    }
    console.log(app.globalData.gender)
    let that = this;
    clearInterval(that.data.timer2)
    if (app.globalData.gender == 0) {
      that.setData({
        model: false,
        secwidth: 100,
        shicount: 8
      })
      that.shijian()
    } else {
      serve(obj,function back() {
        console.log("视频看完了啊")
        that.setData({
          model: false,
          secwidth: 100,
          shicount: 8
        })
        that.shijian()
      })
    }
  },
  // 选择错误
  correct(v) {
    var that = this;
    // 0-错误，1-正确
    if (v.currentTarget.dataset.j == 0) {
      if (v.currentTarget.dataset.act) {
        console.log("答案错误2")
        clearInterval(that.data.timer2)
        that.setData({
          model: true
        })
      } else {
        console.log("答案正确1")
        clearInterval(that.data.timer2)
        var pos = Math.round(Math.random() * (this.data.list.length - 1))
        that.setData({
          ticount: pos,
          timucount: this.data.timucount += 1,
          secwidth: 100,
          shicount: 8
        })
        that.shijian()
      }
    } else {
      if (v.currentTarget.dataset.act) {
        console.log("答案正确3")
        clearInterval(that.data.timer2)
        var pos = Math.round(Math.random() * (this.data.list.length - 1))
        that.setData({
          ticount: pos,
          timucount: this.data.timucount += 1,
          secwidth: 100,
          shicount: 8
        })
        that.shijian()
      } else {
        console.log("答案错误4")
        clearInterval(that.data.timer2)
        that.setData({
          model: true
        })
      }
    }
  },
  // 倒计时
  countDownfun: function () {
    let that = this;
    let countDownNum = 3; //获取倒计时初始值 
    that.setData({
      countDown: countDownNum
    })
    that.setData({
      timer: setInterval(function () {
        countDownNum--;
        that.setData({
          countDown: countDownNum
        })
        if (countDownNum == 0) {
          clearInterval(that.data.timer);
          that.setData({
            active: true
          })
          that.shijian()
        }
      }, 1000)

    })
  },
  shijian() {
    if (this.data.active) {
      console.log(2222)
      let that = this;
      let countDownNum = 8; //获取倒计时初始值 
      that.setData({
        shicount: countDownNum
      })
      that.setData({
        timer2: setInterval(function () {
          countDownNum--;
          that.setData({
            shicount: countDownNum,
            secwidth: that.data.secwidth -= 12.5
          })
          if (countDownNum == 0) {
            clearInterval(that.data.timer2);
            console.log("时间到")
            that.setData({
              model: true
            })
          }
        }, 1000)
      })
      console.log(that.data.timer2, "dafdd")
    }
  },
  onLoad: function (options) {
    var pos = Math.round(Math.random() * (this.data.list.length - 1))
    this.setData({
      ticount: pos,
      openid: options.openid
    })
    tt.setNavigationBarTitle({
      title: "算数小超人"
    });
    this.countDownfun()
    shipin('shuxue', '算数小超人', options.openid)
  },
  back() {
    let ojb = {
      shucount: tt.getStorageSync('count').shucount += this.data.timucount - 1,
      yingcount: tt.getStorageSync('count').yingcount,
      ccount: tt.getStorageSync('count').ccount
    }
    tt.setStorageSync('count', ojb);

    tt.reLaunch({
      url: '/pages/index/index'
    });

  },
  onUnload: function () {
    var that = this;
    clearInterval(that.data.timer2);
    clearInterval(that.data.timer);
  }
})