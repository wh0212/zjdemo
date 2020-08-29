var app = getApp()
var videoAd = tt.createRewardedVideoAd({
  adUnitId: 'nqcqfka2i3j3rf69ub'
})
const serve = function (obj, back) {
  console.log(obj, "广告", app.globalData.gender)
  if (app.globalData.gender == 1) {
    console.log(videoAd)
    videoAd.onError((err) => {
      tt.showToast({
        title: "请稍等",
        icon: "loading",
        duration: 2000,
        success(res) {
          back()
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
          title: "请稍等",
          icon: "loading",
          duration: 2000,
          success(res) {
            setTimeout(() => {
              tt.request({
                url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
                method: "post",
                data: {
                  act: obj.act,
                  channel: obj.openid,
                  appletsName: obj.appletsName,
                  type: 1,
                  appid: 'tt99eeef5306d4c283'
                },
                success: (res) => {
                  console.log(res, 222)
                  back()
                }
              });

            }, 2000)
          },
          fail(res) {
            console.log(`showToast调用失败`);
          },
        });
      } else {
        // 播放中途退出提示
        tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
      }
    })
    videoAdCreat()
  } else {
    tt.showToast({
      title: "请稍等",
      icon: "loading",
      duration: 2000,
      success(res) {
        setTimeout(() => {
          back()
        }, 2000)
      },
      fail(res) {
        console.log(`showToast调用失败`);
      },
    });
  }
　};
function videoAdCreat() {
  // 在事件中创建激励视频广告实例
  videoAdLoad()
}
function videoAdLoad() {
  // 用户触发广告后，显示激励视频广告
  if (videoAd) {
    videoAd.show().catch((err) => {
      videoAd.load()
        .then(() => videoAd.show())
        .catch(err => {})
    })
  }
}
export default serve