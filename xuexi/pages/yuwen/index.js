// pages/yuwen/index.js
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
var app = getApp()
Page({
  data: {
    countDown: 3,
    active: false,
    shicount: 15,
    secwidth: 100,
    ticount: 0,//题目
    model: false,
    timucount: 1,
    timer2: {},
    list: [
      {
        timu: "争奇斗艳",
        chren: ['平', '问', '给', '三', '本', '机', '冬', '先', '反', '奇', '千', '月'],
        act: '奇'
      },
      {
        timu: "汗牛充栋",
        chren: ['栋', '步', '动', '钱', '力', '挂', '瓦', '地', '田', '鹿', '神', '成'],
        act: '栋'
      },
      {
        timu: "金玉满堂",
        chren: ['行', '玉', '给', '三', '本', '机', '冬', '王', '反', '水', '以', '别'],
        act: '玉'
      },
      {
        timu: "饮鸩止渴",
        chren: ['梅', '燕', '美', '接', '行', '鸩', '组', '酒', '耳', '水', '年', '龊'],
        act: '鸩'
      },
      {
        timu: "霸王别姬",
        chren: ['大', '极', '积', '猜', '屋', '慌', '姬', '不', '吐', '并', '春', '城'],
        act: '姬'
      },
      {
        timu: "逍遥法外",
        chren: ['外', '进', '尧', '是', '的', '嗨', '摇', '遥', '谣', '有', '窝', '开'],
        act: '遥'
      },
      {
        timu: "未雨绸缪",
        chren: ['男', '难', '从', '见', '缪', '谬', '某', '遥', '话', '吸', '谋', '俊'],
        act: '缪'
      },
      {
        timu: "庖丁解牛",
        chren: ['疯', '但', '起', '严', '家', '难', '玩', '婚', '庖', '吸', '色', '密'],
        act: '庖'
      },
      {
        timu: "鳞次栉比",
        chren: ['破', '值', '木', '于', '共', '字', '没', '风', '宏', '荣', '栉', '内'],
        act: '栉'
      },
      {
        timu: "戎马倥偬",
        chren: ['框', '经', '指', '非', '掉', '以', '控', '分', '硬', '若', '次', '倥'],
        act: '倥'
      },
      {
        timu: "美轮美奂",
        chren: ['门', '中', '指', '奂', '换', '着', '事', '新', '心', '波', '领', '内'],
        act: '奂'
      },
      {
        timu: "尾不大掉",
        chren: ['生', '伟', '尾', '事', '贼', '钱', '笨', '错', '脱', '上', '小', '空'],
        act: '尾'
      },
      {
        timu: "涸辙之鲋",
        chren: ['车', '河', '军', '粮', '山', '江', '鲋', '人', '鱼', '想', '火', '扫'],
        act: '鲋'
      },
      {
        timu: "兔死狗烹",
        chren: ['蒸', '烤', '拆', '烹', '群', '力', '千', '阿', '旺', '李', '车', '来'],
        act: '烹'
      },
      {
        timu: "信手拈来",
        chren: ['宫', '拈', '拆', '音', '动', '春', '沾', '呆', '主', '死', '过', '成'],
        act: '拈'
      },
      {
        timu: "本末倒置",
        chren: ['未', '套', '名', '天', '目', '发', '末', '芬', '来', '车', '进', '的'],
        act: '末'
      },
      {
        timu: "以儆效尤",
        chren: ['装', '图', '吸', '敬', '比', '丽', '长', '困', '让', '一', '儆', '值'],
        act: '儆'
      },
      {
        timu: "泌人心脾",
        chren: ['发', '看', '泌', '班', '近', '丝', '就', '经', '迷', '乐', '边', '充'],
        act: '泌'
      },
      {
        timu: "乐此不疲",
        chren: ['比', '照', '花', '神', '阿', '疲', '泽', '泉', '和', '趁', '得', '目'],
        act: '疲'
      },
      {
        timu: "分道扬镳",
        chren: ['轻', '进', '劈', '镖', '垄', '彪', '惨', '熊', '数', '慌', '镳', '台'],
        act: '镳'
      },
      {
        timu: "心照不宣",
        chren: ['绝', '轩', '一', '息', '恤', '封', '连', '宣', '坏', '共', '倩', '渲'],
        act: '宣'
      },
      {
        timu: "塞翁失马",
        chren: ['先', '服', '爽', '回', '赛', '直', '样', '手', '起', '塞', '对', '安'],
        act: '塞'
      },
      {
        timu: "时光荏苒",
        chren: ['马', '苒', '到', '套', '冉', '群', '小', '底', '尊', '生', '光', '学'],
        act: '苒'
      },
      {
        timu: "白驹过隙",
        chren: ['狗', '德', '局', '狙', '见', '林', '域', '混', '蒙', '后', '驹', '学'],
        act: '驹'
      },
      {
        timu: "滥竽充数",
        chren: ['说', '起', '短', '地', '于', '曲', '天', '野', '条', '芋', '慢', '闹'],
        act: '芋'
      }
    ],
    openid: 0
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '知识星球大挑战',
      desc: "快来看看你能闯到哪",
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
      channel: "chengyu",
      appletsName: '成语挑战',
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
  aboutItme(v) {
    console.log(v.currentTarget.dataset.item)
    let countAct = this.data.list[this.data.ticount].act
    if (v.currentTarget.dataset.item == countAct) {
      console.log("正确")
      clearInterval(this.data.timer2)
      var pos = Math.round(Math.random() * (this.data.list.length - 1))
      this.setData({
        ticount: pos,
        timucount: this.data.timucount += 1,
        secwidth: 100,
        shicount: 15
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
  onLoad: function (options) {
    var pos = Math.round(Math.random() * (this.data.list.length - 1))
    this.setData({
      ticount: pos,
      openid: options.openid
    })
    tt.setNavigationBarTitle({
      title: "成语挑战"
    });
    this.countDownfun()
    shipin('chengyu','成语挑战',options.openid)
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
      let countDownNum = 15; //获取倒计时初始值 
      that.setData({
        shicount: countDownNum
      })
      that.setData({
        timer2: setInterval(function () {
          countDownNum--;
          that.setData({
            shicount: countDownNum,
            secwidth: that.data.secwidth -= 6.65
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
  back() {

    let ojb = {
      shucount: tt.getStorageSync('count').shucount,
      yingcount: tt.getStorageSync('count').yingcount,
      ccount: tt.getStorageSync('count').ccount += this.data.timucount - 1
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