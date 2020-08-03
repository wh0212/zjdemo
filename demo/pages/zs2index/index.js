const app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    act: 1,
    txt: "",
    array: ["请选择", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"],
    index: 0,
    openid: ""
  },
  bindPickerChange(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerCancel: function (e) {

    tt.showToast({ title: "cancel", icon: 'fail', });
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

    if (this.data.txt && this.data.index !== 0) {
      console.log("Jinru")
      tt.request({
        url: 'https://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.txt
        },
        success: (res) => {
          console.log(res)
          if (res.data.prob == 1) {
            console.log("ddddddff")
            tt.showToast({
              title: '出现违规字',
              icon: 'fail',
              success: (res) => {
                return
              }
            });
          } else {
            var obj = {
              channel: "32",
              appletsName: '星座测智商高度',
              openid: this.data.openid
            }
            serve('/pages/zs2result/index', obj)

          }
        }
      });

    } else {
      tt.showToast({
        title: '请输入相应内容',
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
    shipin(32, '星座测智商高度', options.openid)
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '星座测智商高度',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/zs2index/index?from=sharebuttonabc&otherkey=othervalue&id=32', // ?后面的参数会在转发页面打开时传入onLoad方法
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
  // 离开关闭
  onUnload: function () {
    tt.hideToast();
  }
})
