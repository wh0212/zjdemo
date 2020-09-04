App({
  globalData: {
    gender: 0, //0-头条，1-抖音
    item: {},
    userInfo: {},
    apiBase: 'https://tgadmin.clvtmcn.cn/api',
    openid: '',
    videoAd: tt.createRewardedVideoAd({
      adUnitId: 'nqcqfka2i3j3rf69ub'
    }),
    currentPage: Object,
  },

  playAd: function () {
    let videoAd = this.globalData.videoAd
    // 照抄的官方例子
    videoAd
      .show()
      .then(() => {
        console.log("广告显示成功");
      })
      .catch((err) => {
        console.log("广告组件出现问题", err);
        // 可以手动加载一次
        videoAd.load().then(() => {
          console.log("手动加载成功");
          // 加载成功后需要再显示广告
          return videoAd.show();
        });
      });
  },
  onLaunch: function () {
    if (this.globalData.videoAd) {
      // onClose只监听一次
      this.globalData.videoAd.onClose(res => {
        if (res.isEnded || res === undefined) {
          // 实现子子页面的closeAdFunction与cancelAdFunction方法
          this.globalData.currentPage.closeAdFunction()
        } else {
          this.globalData.currentPage.cancelAdFunction()
        }
      })
      this.globalData.videoAd.onError((err) => {
        this.globalData.currentPage.errcancelAdFunction()
      })
    }
    var that = this;
    tt.getSystemInfo({
      success: (res) => {
        if (res.appName == 'Toutiao') {

          that.globalData.gender = 0
        } else if (res.appName == 'Douyin') {

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
                tt.setStorageSync('userInfo', res.userInfo)
              }
            });
          }
        });
      }
    })

  },
  onHide: function () {
    tt.setStorageSync('navId', '');
  }
})
