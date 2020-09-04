import Request from "../../utils/request"
Page({
  data: {
    userinfo: {} || wx.getStorageSync('userinfo'),
    model: false,
    phoneAct: false,
    modelerm: false,
    userPhone: wx.getStorageSync('phone') || "请绑定手机号",
    money: {},
    result: {}
  },
  saoma() {
    var _this = this;
    //小程序扫码
    wx.scanCode({
      success: (res) => {
        console.log(res.result, "saoma")
        console.log(wx.getStorageSync('login').token)
        console.log(wx.getStorageSync('member_id'))
        Request({
          url: "api/member/scanget",
          method: "get",
          data: {
            token: wx.getStorageSync('login').token,
            member_id: wx.getStorageSync('member_id'),
            scan_token: res.result
          }
        }).then((res) => {
          console.log(res, "cg")
          if (res.data.code == 1) {
            wx.showToast({
              title: '返回网页进行登录',
            })
          }
        })
      }
    })
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
    wx.setStorageSync('userinfo', v.detail.userInfo)
    wx.setStorageSync('iv', v.detail.iv)
    wx.setStorageSync('encry', v.detail.encryptedData)
    var that = this;
    this.setData({
      model: false,
      userinfo: v.detail.userInfo,
      resdata: v.detail
    })
    Request({
      url: "api/Wxlogin/getUserInfo",
      method: "get",
      data: {
        encryptedData: v.detail.encryptedData,
        iv: v.detail.iv,
        session_key: wx.getStorageSync('login').session_key,
        token: wx.getStorageSync('login').token
      }
    }).then((res1) => {
      console.log(res1.data.member_id, "id")
      wx.setStorageSync('member_id', res1.data.member_id)
      Request({
        url: "api/Member/memberinfo",
        method: "get",
        data: {
          member_id: res1.data.member_id
        }
      }).then((res2) => {
        that.setData({
          money: res2.data
        })
      })
    })
  },
  onLoad: function (v) {
    console.log(v.code)
    if (v.code == -1 || !wx.getStorageSync('login').token) {
      this.setData({
        model: true
      })
    }

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
          wx.setStorageSync('login', res.data)
          wx.getSetting({
            success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                Request({
                  url: "api/Member/memberinfo",
                  method: "get",
                  data: {
                    member_id: wx.getStorageSync('member_id'),
                    token: wx.getStorageSync('login').token
                  }
                }).then((res) => {
                  that.setData({
                    money: res.data
                  })
                })
                wx.getUserInfo({
                  success: function (res) {
                    console.log(res, "userinfo")
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
        })
      }
    });
    var that = this;
  },

  onShow: function () {
    var that = this;
    if (wx.getStorageSync('member_id')) {
      Request({
        url: "api/Member/memberinfo",
        method: "get",
        data: {
          member_id: wx.getStorageSync('member_id')
        }
      }).then((res2) => {
        console.log(res2.data,"111")
        that.setData({
          money: res2.data
        })
      })
    }
    this.setData({
      userinfo: wx.getStorageSync('userinfo')
    })
    if (wx.getStorageSync('phone')) {
      this.setData({
        userPhone: wx.getStorageSync('phone')
      })
    } else {
      this.setData({
        userPhone: "请绑定手机号"
      })
    }
    


  },
  onShareAppMessage: function () {

  }
})