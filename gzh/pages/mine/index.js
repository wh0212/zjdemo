
Page({

  data: {
    userinfo: {},
    model: false,
    phoneAct: false
  },
  bindGetUserInfo(v) {
    console.log(v.detail.userInfo)
    wx.setStorageSync('userinfo', v.detail.userInfo)
    this.setData({
      model: false,
      userinfo: v.detail.userInfo
    })
  },

  onLoad: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              wx.login({
                success: res => {
                  console.log("用户的code:" + res.code);

                }
              });
            }
          });
        } else {
          that.setData({
            model: true
          });
        }
      }
    });
  },

  onShow: function () {
    this.setData({
      userinfo: wx.getStorageSync('userinfo')
    })
  },
  onShareAppMessage: function () {

  }
})