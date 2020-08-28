import Request from "../../utils/request"
Page({
  data: {
    userinfo: {} || wx.getStorageSync('userinfo'),
    model: false,
    phoneAct: false,
    modelerm: false,
    userPhone: wx.getStorageSync('phone') || "请绑定手机号",
    money: {}
  },
  relation() {
    wx.setClipboardData({
      data: 'data',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  model_ewm() {
    this.setData({
      modelerm: true
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail)
    var that = this;
    Request({
      url: "api/Wxlogin/getmoblie",
      method: "get",
      data: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        session_key: wx.getStorageSync('login').session_key,
        token: wx.getStorageSync('login').token,
        member_id: wx.getStorageSync('member_id')
      }
    }).then((res) => {
      console.log(res)
      wx.setStorageSync('phone', res.data.moblie)
      that.setData({
        userPhone: res.data.moblie
      })
    })
  },
  bindGetUserInfo(v) {
    console.log(v, "userinfo")
    wx.setStorageSync('userinfo', v.detail.userInfo)
    var that = this;
    this.setData({
      model: false,
      userinfo: v.detail.userInfo,
      resdata: v.detail
    })
    wx.login({
      success: res => {
        console.log("code:" + res.code);
        Request({
          url: "api/Wxlogin/login",
          method: "get",
          data: {
            code: res.code
          }
        }).then((res) => {
          console.log(res.data, "登录");
          wx.setStorageSync('login', res.data)
          Request({
            url: "api/Wxlogin/getUserInfo",
            method: "get",
            data: {
              encryptedData: that.data.resdata.encryptedData,
              iv: that.data.resdata.iv,
              session_key: res.data.session_key,
              token: res.data.token
            }
          }).then((res1) => {
            wx.setStorageSync('member_id', res1.data.member_id)
            Request({
              url: "api/Member/memberinfo",
              method: "get",
              data: {
                member_id: res1.data.member_id
              }
            }).then((res) => {
              console.log(res.data)
              that.setData({
                money: res.data
              })
            })
          })
        })
      }
    });
  },
  onLoad: function () {
    console.log(wx.getStorageSync('login').token)
    if (!wx.getStorageSync('login').token) {
      this.setData({
        model: true
      });
    }
    wx.checkSession({
      success() {
        console.log("未过期")
      },
      fail() {
        console.log("已过期")
        that.setData({
          model: true
        });
      }
    })
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          Request({
            url: "api/Member/memberinfo",
            method: "get",
            data: {
              member_id: wx.getStorageSync('member_id')
            }
          }).then((res) => {
            console.log(res.data)
            that.setData({
              money: res.data
            })
          })
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userinfo: res.userInfo
              })
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