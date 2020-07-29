const app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    images: ""
  },
  tapbtn() {
    if (this.data.images) {
      wx.getFileSystemManager().readFile({
        filePath: this.data.images[0], // 选择图片返回的相对路径
        encoding: 'base64', // 编码格式
        success: res => { // 成功的回调
          console.log('data:image/png;base64,' + res.data)
          tt.request({
            url: 'http://tgadmin.clvtmcn.cn/api/Safety/safetyIsImageIs',
            method: 'post',
            data: {
              "tasks": [
                {
                  "image_data": res.data
                }
              ]
            },
            success: (res) => {
              console.log(res)
            }
          });
        }
      })
      var obj = {
        channel: "27",
        appletsName: '看你是一个怎样的人',
      }
      serve('/pages/xg4result/index',obj)

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
shipin(27,'看你是一个怎样的人')
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
