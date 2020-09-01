import Request from "../../utils/request"
Page({
  data: {
    userinfo: {} || wx.getStorageSync('userinfo'),
    model: false,
    phoneAct: false,
    modelerm: false,
    userPhone: wx.getStorageSync('phone') || "请绑定手机号",
    money: {},
    result:{}
  },
  saoma() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res.result,"saoma")
        console.log(wx.getStorageSync('login').token)
        console.log(wx.getStorageSync('member_id'))
        Request({
          url:"api/member/scanget",
          method: "get",
          data:{
            token:wx.getStorageSync('login').token,
            member_id:wx.getStorageSync('member_id'),
            scan_token:res.result
          }
        }).then((res)=>{
          console.log(res,"cg")
          wx.showToast({
            title: '授权成功，去网页进行登录',
          })
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
          wx.setStorageSync('login', res.data)
          Request({
            url: "api/Wxlogin/getUserInfo",
            method: "get",
            data: {
              encryptedData: v.detail.encryptedData,
              iv: v.detail.iv,
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
            }).then((res2) => {
              that.setData({
                money: res2.data
              })
            })
          })
        })
      }
    });
  },
  onLoad: function (v) {
    console.log(v.code)
    if(v.code==-1){
      this.setData({
        model: true
      })
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
    console.log(wx.getStorageSync('login').token)
    if (!wx.getStorageSync('login').token) {
      this.setData({
        model: true
      });
    }

    var that = this;
    wx.getSetting({
      success: function (res) {
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
        if (res.authSetting['scope.userInfo']) {

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