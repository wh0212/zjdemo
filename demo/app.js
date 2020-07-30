App({
  globalData: {
    gender: 0 //0-头条，1-抖音
  },
  onLaunch: function () {
    tt.getSystemInfo({
      success: (res) => {
        console.log(res)
        if (res.appName == 'Toutiao') {
          console.log("头条")
          that.globalData.gender = 0
        } else if (res.appName == 'Douyin') {
          console.log("抖音")
          that.globalData.gender = 1
        }
      }
    })
    var that = this;
    tt.getUserInfo({
      success: (res) => {
        console.log(res.userInfo)

      }
    });
    tt.login({
      success: (res) => {
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/jscode2session',
          method: 'post',
          data: {
            code: res.code,
            type:1
          },
          success: (res) => {
            
            tt.setStorageSync('cookies', res.data);
          }
        });
      }
    })
  }
})
