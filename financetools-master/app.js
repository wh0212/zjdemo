//app.js
App({
  globalData: {
    userInfo: null,
    gender: 0, //0-头条，1-抖音
    openid:''
  },
  onLaunch: function () {
    var that = this;
    tt.getSystemInfo({
      success: (res) => {
        if (res.appName == 'Toutiao') {
          console.log("头条")
          that.globalData.gender = 0;
        } else if (res.appName == 'Douyin') {
          console.log("抖音")
          that.globalData.gender = 1;
          tt.getSystemInfo({
            success: (res) => {
              if (res.platform == 'android') {
                console.log("安卓", parseFloat(res.version) > 10.3)
                if (parseFloat(res.version) > 10.3) {
                  console.log("大")
                } else {
                  console.log("小")
                  tt.showModal({
                    title: "提示",
                    content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。",
                  });
                }
              } else {
                if (parseFloat(res.version) > 10.7) {

                } else {
                  tt.showModal({
                    title: "提示",
                    content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。",
                  });
                }
              }
            }
          })
        }
      }
    })
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/jscode2session',
          method: 'post',
          data: {
            code: res.code,
            appid: 'tt711a07a7ee2037ee'
          },
          success: (res) => {
            console.log(res.data, "dddads")
            that.globalData.openid = res.data.openid;
            tt.getUserInfo({
              success:(res)=>{
                console.log(res.userInfo)
                that.globalData.userInfo=res.userInfo
              }
            });
          }
        });
      }
    })
  }
})