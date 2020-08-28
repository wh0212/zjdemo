
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    modelerm: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modelerm: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nodemdel_erm() {
      this.setData({
        modelerm: false
      })
    },
    showBigImg() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '是否要保存图片',
        success(res) {
          if (res.confirm) {
            wx.getImageInfo({
              src: that.data.url,
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
  }
})
