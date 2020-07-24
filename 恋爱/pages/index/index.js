const app = getApp()
Page({
  data: {
    act: 1,
    txt: "",
    array: ["请选择", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"],
    index: 0,
    act1: 3,
    txt2: ""
  },
  tapxz() {

  },
  bindPickerChange(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerCancel: function (e) {
    console.log(e);
    tt.showToast({ title: "cancel" });
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
  leftact2(v) {
    if (v.currentTarget.dataset.index == 3) {
      this.setData({
        act1: 3
      })
    } else {
      this.setData({
        act1: 4
      })
    }
  },
  inptxt(v) {
    console.log(v.detail.value);
    this.setData({
      txt: v.detail.value
    })
  },
  inptxt2(v) {
    console.log(v.detail.value);
    this.setData({
      txt2: v.detail.value
    })
  },
  // 点击
  search() {
    console.log(this.data)
    if (this.data.txt && this.data.txt2) {
      this.videoAdCreat()
    } else {
      tt.showToast({
        title: '请输入名字',
        icon: 'fail'
      });
    }

  },
  onLoad: function () {
    this.videoAd = tt.createRewardedVideoAd({
      adUnitId: '2il8bjen03ef27cuxl'
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
          title: "正在检测",
          icon: "loading",
          success(res) {
            setTimeout(() => {
              tt.navigateTo({
                url: '/pages/result/index'
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
    console.log('视频加载失败',err)
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
