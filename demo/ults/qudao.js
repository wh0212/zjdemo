function shipin(channel,name) {
  tt.request({
    url: "http://tgadmin.clvtmcn.cn/api/login/adUnitInform",
    method: "post",
    data: {
      openid: tt.getStorageSync('cookies').openid,
      channel,
      appletsName: name,
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