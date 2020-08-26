var app = getApp()
export default function Request(params) {
  tt.showToast({
    title: '加载中',
    icon: 'loading'
  })
  return new Promise((resolve, reject) => {
    tt.request({
      ...params,
      url: app.globalData.apiBase + params.url,
      success: (data) => {
        resolve(data.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: tt.hideToast
    })
  })
}
