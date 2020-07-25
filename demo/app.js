App({
  onLaunch: function () {
    tt.getUserInfo({
      success: (res) => {
        console.log(res)
      }
    });
    tt.login({
      success: (res) => {
        console.log(res)

      }
    })
  }
})
