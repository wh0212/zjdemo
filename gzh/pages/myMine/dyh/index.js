import Request from "../../../utils/request";
Page({
  data: {
    userinfo: {},
    addimg: "",
    modelAct: false,
    modelId: 0,
    list:[]
  },
  showBigImg() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否要保存图片',
      success(res) {
        console.log(`https://tgadmin.clvtmcn.cn/${that.data.addimg}`)
        if (res.confirm) {
          wx.getImageInfo({
            src: `https://tgadmin.clvtmcn.cn/${that.data.addimg}`,
            success: (res) => {
              console.log(res)
              wx.saveImageToPhotosAlbum({
                filePath: res.path,
                success(result) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000,
                    success: () => {
                      that.setData({
                        modelerm: false
                      })
                    }
                  })

                },
              })
            }
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '保存取消',
            icon: 'none',
            duration: 2000,
            success: () => {
              that.setData({
                modelerm: false
              })
            }
          })
        }
      }
    })
  },
  nonemodel() {
    this.setData({
      modelAct: false
    })
  },
  adddyh(v) {
    this.setData({
      modelId: v.currentTarget.dataset.id
    })
    var that = this;
    if (v.currentTarget.dataset.id == 0) {
      this.setData({
        modelAct: true
      })
    } else {
      Request({
        url: 'api/qrcode/authQrcode',
        method: "get",
        data: {
          member_id: wx.getStorageSync('member_id')
        }
      }).then((result) => {
        that.setData({
          addimg: result.data.img_url,
          modelAct: true
        })
      })
    }
  },

  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/wxlogin/authbind",
      method: "get",
      data: {
        member_id: wx.getStorageSync('member_id')
      }
    }).then((res) => {
      console.log(res.data)
      wx.setStorageSync('douyin_id', res.data[0].douyin_id)
      that.setData({
        list:res.data,
        userinfo:res.data[0]
      })
    })
  },


  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})