const app = getApp()
import serve from "../../ults/video.js"
import shipin from "../../ults/qudao.js"
Page({
  data: {
    act: 1,
    txt: "",
    array: ["请选择", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"],
    index: 0,
    openid:"",
    dateb:'请选择日期',
    datea:""
  },
  tapxz() {

  },
  changeDate: function (e) {
    console.log(e)
    //获取当前选择日期
    var date = e.detail.value;
    this.setData({
      dateb: date
    })
  },
  bindPickerChange(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerCancel: function (e) {
    console.log(e);
    tt.showToast({ title: "cancel" ,icon: 'fail' });
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
  inptxt(v) {
    console.log(v.detail.value);
    this.setData({
      txt: v.detail.value
    })
  },

  search() {
    console.log(this.data)
    if (this.data.txt && this.data.index !== 0 && this.data.dateb !== '请选择日期') {
      tt.request({
        url: 'https://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.txt
        },
        success: (res) => {
          console.log(res)
          if (res.data.prob == 1) {
            tt.showToast({
              title: '出现违规字',
              icon:'fail',
              success: (res) => {
                return
              }
            });
          } else {
            var obj = {
              channel: "51",
              appletsName: '你的窝囊指数是多少',
              openid:this.data.openid
            }
            serve('/pages/xg2result/index',obj)
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
    shipin(51,'你的窝囊指数是多少',options.openid)
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '你的窝囊指数是多少',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/xg2index/index?from=sharebuttonabc&otherkey=othervalue&id=51', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '24cg6o6dnd9f3fei79',
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
