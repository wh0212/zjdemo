App({
  globalData: {
    gender: 0 //0-头条，1-抖音
  },
  onLaunch: function () {
    var that = this;
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
    tt.login({
      success: (res) => {
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/jscode2session',
          method: 'post',
          data: {
            code: res.code,
            appid: 'tt5e2b2896c1113f4d'
          },
          success: (res) => {

          }
        });
      }
    })
  }
})
