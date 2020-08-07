function shipin(channel,name,openid) {
  tt.request({
    url: "https://tgadmin.clvtmcn.cn/api/login/adUnitInform",
    method: "post",
    data: {
      openid,
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