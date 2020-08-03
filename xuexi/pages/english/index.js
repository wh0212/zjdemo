import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
var app = getApp()
Page({
  data: {
    countDown: 3,
    active: false,
    shicount: 10,
    secwidth: 100,
    ticount: 0,//题目
    model: false,
    timucount: 1,//题数
    timer2: {},
    openid: 0,
    list: [
      {
        timu: 'watch',
        chren: ['手表', '凉爽的', '对不起', '日记本'],
        act: 0
      },
      {
        timu: 'computer',
        chren: ['水果', '电脑', '吃饭', '睡觉'],
        act: 1
      },
      {
        timu: 'sleep',
        chren: ['饮料', '电影', '吃饭', '睡觉'],
        act: 3
      },
      {
        timu: 'running',
        chren: ['赛跑', '看电影', '学习', '班级'],
        act: 0
      },
      {
        timu: 'company',
        chren: ['谈恋爱', '公司', '汽水', '棋子'],
        act: 1
      },
      {
        timu: 'world',
        chren: ['水瓶', '闲话', '世界', '鲜花'],
        act: 2
      },
      {
        timu: 'bus',
        chren: ['飞机', '车站', '动物园', '公交车'],
        act: 3
      },
      {
        timu: 'passenger',
        chren: ['乘客', '夫人', '状元', '姑娘'],
        act: 0
      },
      {
        timu: 'examination',
        chren: ['唱歌', '考试', '生活', '美好'],
        act: 1
      },
      {
        timu: 'measurement',
        chren: ['测试', '考试', '测量', '电脑'],
        act: 2
      },
      {
        timu: 'doctor',
        chren: ['医生', '教授', '老师', '机器'],
        act: 0
      },
      {
        timu: 'angel',
        chren: ['排行', '编译', '超人', '天使'],
        act: 3
      },
      {
        timu: 'safety',
        chren: ['危险', '安全', '惊悚', '可笑'],
        act: 1
      },
      {
        timu: 'succeed',
        chren: ['死亡', '注意', '成功', '认真'],
        act: 2
      },
      {
        timu: 'dictionaries',
        chren: ['软件', '盛典', '笔记本', '词典'],
        act: 3
      },
      {
        timu: 'chip',
        chren: ['铁块', '芯片', '网页', '水杯'],
        act: 1
      },
      {
        timu: 'charger',
        chren: ['充电器', '暖水壶', '广告', '将军'],
        act: 0
      },
      {
        timu: 'shareholder',
        chren: ['分享', '家园', '公式', '股东'],
        act: 3
      },
      {
        timu: 'disaster',
        chren: ['保持', '灾难', '禁止', '关闭'],
        act: 1
      },
      {
        timu: 'principle',
        chren: ['泉水', '质量', '原理', '管理'],
        act: 2
      },
      {
        timu: 'forest',
        chren: ['森林', '覆盖', '花朵', '昆虫'],
        act: 0
      },
      {
        timu: 'school',
        chren: ['站台', '车站', '学校', '站点'],
        act: 2
      },
      {
        timu: 'translate',
        chren: ['变异', '成长', '改变', '翻译'],
        act: 3
      },
      {
        timu: 'experience',
        chren: ['经历', '变化', '突破', '成功'],
        act: 0
      },
      {
        timu: 'colour',
        chren: ['眼色', '颜色', '尺子', '钢笔'],
        act: 1
      },
      {
        timu: 'zoo',
        chren: ['博物馆', '科技园', '星星', '动物园'],
        act: 3
      }
    ]
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
    let that = this;
    var obj = {
      channel: "english",
      appletsName: '英语知识',
      openid: this.data.openid
    }
    clearInterval(this.data.timer2)
    if (app.globalData.gender == 0) {
      that.setData({
        model: false,
        secwidth: 100,
        shicount: 10
      })
      that.shijian()
    } else {
      serve(obj,function back() {
        console.log("视频看完了啊")
        that.setData({
          model: false,
          secwidth: 100,
          shicount: 10
        })
        that.shijian()
      })
    }


  },
  daanfun(v) {
    if (v.currentTarget.dataset.index == this.data.list[this.data.ticount].act) {
      console.log("正确")
      clearInterval(this.data.timer2)
      var pos = Math.round(Math.random() * (this.data.list.length - 1))
      this.setData({
        ticount: pos,
        timucount: this.data.timucount += 1,
        secwidth: 100,
        shicount: 10
      })
      this.shijian()
    } else {
      console.log("错误")
      clearInterval(this.data.timer2)
      clearInterval(this.data.timer);
      this.setData({
        model: true
      })
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
      let that = this;
      let countDownNum = 10; //获取倒计时初始值 
      that.setData({
        shicount: countDownNum
      })
      that.setData({
        timer2: setInterval(function () {
          countDownNum--;
          that.setData({
            shicount: countDownNum,
            secwidth: that.data.secwidth -= 10
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
    }
  },
  onLoad: function (options) {
    var pos = Math.round(Math.random() * (this.data.list.length - 1))
    this.setData({
      ticount: pos,
      openid: options.openid
    })
    tt.setNavigationBarTitle({
      title: "英语知识"
    });
    this.countDownfun()
    shipin('english', '英语知识', options.openid)
  },
  back() {
    let ojb = {
      shucount: tt.getStorageSync('count').shucount,
      yingcount: tt.getStorageSync('count').yingcount += this.data.timucount - 1,
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