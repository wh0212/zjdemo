
Page({

  data: {
    userinfo: {},
    model: false,
    phoneAct: false,
    modelerm: false
  },
  showBigImg() {
    wx.getImageInfo({
      src: 'http://img.kuaigoutui.com/537eac22118117557c569998f305542.jpg',
      success: (res) => {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          },
        })
      }
    })
  },
  nodemdel_erm() {
    this.setData({
      modelerm: false
    })
  },
  model_ewm() {
    this.setData({
      modelerm: true
    })
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
              that.setData({
                userinfo: res.userInfo
              })
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