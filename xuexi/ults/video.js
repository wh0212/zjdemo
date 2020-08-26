var app = getApp()
var videoAd = tt.createRewardedVideoAd({
  adUnitId: 'uwbk60jx3770tn930e'
})
const serve = function (obj, back) {
  if (app.globalData.gender == 1) {
    videoAd.onError((err) => {

    })
    // 监听关闭
    videoAd.onClose((status) => {
      if (status && status.isEnded || status === undefined) {
        console.log('视频正常关闭 下发奖励')
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
          method: "post",
          data: {
            openid: obj.openid,
            channel: obj.channel,
            appletsName: obj.appletsName,
            type: 1,
            appid:'tt410337bede3907f2'
          },
          success: (res) => {
            console.log(res, 222)
            tt.reLaunch({
              url
            });
          }
        });
        back()
      } else {
        // 播放中途退出，进行提示
        tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
      }
    })
    videoAdCreat()
  } else {
    console.log("视频已经看完了，该返回了1")
    back()
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