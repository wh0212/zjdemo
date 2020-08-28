const apiBase = "https://tgadmin.clvtmcn.cn/"
module.exports = (params) => {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: apiBase + params.url,
      success: (data) => {
        resolve(data.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: wx.hideLoading
    })
  })
}