const app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    act: 1,
    txt: "",
    array: ["请选择","白羊座", "金牛座", "双子座", "巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"],
    index: 0,
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
  inptxt(v) {
    
    this.setData({
      txt: v.detail.value
    })
  },

  search() {
    
    if (this.data.txt && this.data.index !==0) {
      tt.request({
        url: 'http://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.txt
        },
        success: (res) => {
          console.log(res)
          if (res.data.prob == 1) {
            tt.showToast({
              title: '出现违规字',
              success: (res) => {
                return
              }
            });
          } else {
            var obj = {
              channel: "32",
              appletsName: '星座测智商高度',
            }
            serve('/pages/zs2result/index',obj)
          }
        }
      });
      
    } else {
      tt.showToast({
        title: '请输入名字', 
        icon: 'fail'
      });
    }
  },
  onLoad: function () {
    shipin(32,'星座测智商高度')
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
    console.log(err,'视频加载失败')
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
