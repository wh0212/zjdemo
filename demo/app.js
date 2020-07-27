App({
  globalData: {
    gender: 0 //0-头条，1-抖音
  },
  onLaunch: function () {
    tt.getSystemInfo({
      success: (res) => {
        console.log(res.appName)
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
        console.log(res)

      }
    })
  }
})
