var app = getApp()
var videoAd = tt.createRewardedVideoAd({
  adUnitId: 'ek5fh4pno97ttg77oh'
})
const serve = function (url,obj) {
  console.log(url)
  if (app.globalData.gender == 1) {
    console.log(videoAd)
    videoAd.onError((err) => {
      tt.showToast({
        title: "正在检测",
        icon: "loading",
        duration: 2000,
        success(res) {
          setTimeout(() => {
            tt.reLaunch({
              url
            });
          }, 2000)
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
          title: "正在检测",
          icon: "loading",
          duration: 2000,
          success(res) {
            setTimeout(() => {
              console.log(tt.getStorageSync('cookies').openid)
              tt.request({
                url: 'http://tgadmin.clvtmcn.cn/api/login/adUnitInform',
                method: "post",
                data: {
                  openid: tt.getStorageSync('cookies').openid,
                  channel: obj.channel,
                  appletsName: obj.appletsName,
                  type: 1
                },
                success: (res) => {
                  console.log(res,222)
                  tt.reLaunch({
                    url
                  });
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
      title: "正在检测",
      icon: "loading",
      duration: 2000,
      success(res) {
        setTimeout(() => {
          tt.reLaunch({
            url
          });
        }, 2000)

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
          tt.showToast({
            title: videoAdErrHandle(err),
            icon: 'none'
          })
        })
    })
  }
}
function videoAdErrHandle(err) {
  console.log('视频加载失败')
  console.log(err)
  // {errMsg: "no advertisement", errCode: 1004}
  const errHandle = {
    1000: '后端接口调用失败',
    1001: '参数错误',
    1002: '广告单元无效',
    1003: '内部错误',
    1004: '无合适的广告',
    1005: '广告组件审核中',
    1006: '广告组件被驳回',
    1007: '广告组件被封禁',
    1008: '广告单元已关闭',
  }
  return errHandle[err.errCode] || '视频加载错误,重新加载页面试试吧'
}



export default serve