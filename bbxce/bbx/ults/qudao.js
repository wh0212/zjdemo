
function shipin(channel,name,openid1) {
  tt.request({
    url: "https://tgadmin.clvtmcn.cn/api/channel/channelAdd",
    method: "post",
    data: {
      openid:openid1 || tt.getStorageSync('openid'),
      channel,
      applets_name: name,
      type: 2
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