var app = getApp()
import serve from "../../ults/video.js"
Page({
  data: {
    act: 1,
    username: "",
    index: "请选择日期",
    datea: ""
  },
  changeDate: function (e) {
    //获取当前选择日期
    var date = e.detail.value;
    this.setData({
      index: date
    })
  },
  leftact(v) {
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
  bindPickerChange(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerCancel: function (e) {
    tt.showToast({ title: "cancel" });
  },
  inptxt(v) {
    this.setData({
      username: v.detail.value
    })
  },
  tapbtn() {
    if (this.data.index && this.data.username) {
      serve('/pages/xg7result/index')
    } else {
      tt.showToast({
        title: '请输入对应内容', // 内容
        icon: 'fail'
      });
    }
  },
  onLoad: function (options) {
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
    
  },
  videoAdCreat() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    this.videoAdLoad()
  },
  videoAdLoad() {
    // 用户触发广告后，显示激励视频广告
    if (this.videoAd) {
      this.videoAd.show().catch((err) => {
        this.videoAd.load()
          .then(() => this.videoAd.show())
          .catch(err => {
            tt.showToast({
              title: this.videoAdErrHandle(err),
              icon: 'none'
            })
          })
      })
    }
  },
  videoAdErrHandle(err) {
    console.log('视频加载失败')
    console.log(err)
    // {errMsg: "no advertisement", errCode: 1004}
    const errHandle = {
      1000: '后端接口调用失败',
      1001: '参数错误',
      1002: '广告单元无效',
      1003: '内部错误',
      1004: '无合适的广告',
      1005: '广告组件审核中',
      1006: '广告组件被驳回',
      1007: '广告组件被封禁',
      1008: '广告单元已关闭',
    }
    return errHandle[err.errCode] || '视频加载错误,重新加载页面试试吧'
  },
  onUnload: function () {
    tt.hideToast();
  }
})