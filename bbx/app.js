App({
  globalData: {
    gender: 0, //0-头条，1-抖音
    item: {},
    userInfo:{},
    apiBase:'https://tgadmin.clvtmcn.cn/api',
    openid:''
  },
  onLaunch: function () {
    var that = this;
    tt.getSystemInfo({
      success: (res) => {
        if (res.appName == 'Toutiao') {
          console.log("头条")
          that.globalData.gender = 0
        } else if (res.appName == 'Douyin') {
          console.log("抖音")
          that.globalData.gender = 1;
          tt.getSystemInfo({
            success: (res) => {
              if (res.platform == 'android') {
                if (parseFloat(res.version) > 10.3) {
                } else {
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
    wx.login({
      success: res2 => {
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/jscode2session',
          method: 'GET',
          data: {
            code: res2.code,
            appid: 'tt99eeef5306d4c283'
          },
          success: (res) => {
            console.log(res.data)
            that.globalData.openid = res.data.openid;
            tt.setStorageSync('openid', res.data.openid);
            tt.setStorageSync('token', res.data.session_key);
            tt.getUserInfo({
              success: (res) => {
                that.globalData.userInfo = res.userInfo;
                tt.setStorageSync('userInfo',res.userInfo)
              }
            });
          }
        });
      }
    })
  }
})
