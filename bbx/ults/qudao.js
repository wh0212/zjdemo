
function shipin(channel,name,openid1) {
  console.log(channel,name,openid1,"jinru qudao")
  tt.request({
    url: "https://tgadmin.clvtmcn.cn/api/channel/channelAdd",
    method: "post",
    data: {
      openid:tt.getStorageSync('openid'),
      channel,
      applets_name: name,
      type: 2,
      act:openid1
    },
    success(res) {
      console.log(res,111111);
    },
    fail(res) {
      tt.showToast({
        title: res.errMsg,
      })
    },
  });
}


export default shipin