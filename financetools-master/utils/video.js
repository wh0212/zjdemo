var app = getApp()
var videoAd = tt.createRewardedVideoAd({
  adUnitId: 'hj5h948jc2d22g8a0d'
})
const serve = function (url, obj, back) {
  console.log(url, obj)
  if (app.globalData.gender == 1) {
    console.log(videoAd)
    videoAd.onError((err) => {
      tt.showToast({
        title: "正在计算",
        icon: "loading",
        duration: 2000,
        success(res) {
          if (url) {
            setTimeout(() => {
              tt.reLaunch({
                url
              });
            }, 2000)
            back()
          } else {
            back()
          }
        },
        fail(res) {
          console.log(`showToast调用失败`);
        },
      });
    })
    // 监听关闭
    videoAd.onClose((status) => {
      if (status && status.isEnded || status === undefined) {
        console.log('视频正常关闭 下发奖励')
        tt.showToast({
          title: "正在计算",
          icon: "loading",
          duration: 2000,
          success(res) {
            setTimeout(() => {
              tt.request({
                url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
                method: "post",
                data: {
                  openid: obj.openid,
                  channel: obj.channel,
                  appletsName: obj.appletsName,
                  type: 1
                },
                success: (res) => {
                  console.log(res, 222)
                  if (url) {
                    setTimeout(() => {
                      tt.reLaunch({
                        url
                      });
                    }, 2000)
                    back()
                  }else{
                    back()
                  }
                }
              });

            }, 2000)
          },
          fail(res) {
            console.log(`showToast调用失败`);
          },
        });
      } else {
        // 播放中途退出，进行提示
        tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
      }
    })
    videoAdCreat()
  } else {
    tt.showToast({
      title: "正在计算",
      icon: "loading",
      duration: 2000,
      success(res) {
        if (url) {
          setTimeout(() => {
            tt.reLaunch({
              url
            });
          }, 2000)
          back()
        }else{
          back()
        }

      },
      fail(res) {
        console.log(`showToast调用失败`);
      },
    });
  }
　};

function videoAdCreat() {
  // 在页面onLoad回调事件中创建激励视频广告实例
  videoAdLoad()
}
function videoAdLoad() {
  // 用户触发广告后，显示激励视频广告
  if (videoAd) {
    videoAd.show().catch((err) => {
      videoAd.load()
        .then(() => videoAd.show())
        .catch(err => {

        })
    })
  }
}

export default serve