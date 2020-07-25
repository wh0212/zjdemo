const app = getApp()

Page({
  data: {
    images: ""
  },
  tapbtn() {
    if (this.data.images) {
      this.videoAdCreat()
    } else {
      tt.showToast({
        title: '请选择图片', // 内容
        icon: 'fail'
      });
    }
  },
  upimage() {
    let that = this;
    tt.chooseImage({
      sourceType: ["album"],
      count: 3,
      success(res) {
        console.log(res)
        that.setData({
          images: res.tempFilePaths,
        });
      },
      fail(res) {
        console.log(`chooseImage调用失败`);
      },
    });
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
      date: myDate
    })
    this.videoAd = tt.createRewardedVideoAd({
      adUnitId: 'ek5fh4pno97ttg77oh'
    })
    this.videoAd.onError((err) => {
      tt.showToast({
        title: this.videoAdErrHandle(err),
        icon: 'none'
      })
    })
    // 监听关闭
    this.videoAd.onClose((status) => {
      if (status && status.isEnded || status === undefined) {
        console.log('视频正常关闭 下发奖励')
        tt.showToast({
          title: "正在檢測",
          icon: "loading",
          duration: 2000,
          success(res) {
            setTimeout(() => {
              tt.reLaunch({
                url: '/pages/xg4result/index' // 指定页面的url
              });
            }, 2000)

          },
          fail(res) {
            console.log(`showToast调用失败`);
          },
        });


      } else {
        // 播放中途退出，进行提示
        tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
      }
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
  }
})
