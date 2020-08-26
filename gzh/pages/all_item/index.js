
Page({
  data: {
    aboutList: [],
    inptxt: "",
    xzact: 0,
    model: false,
    ewmact: false,
    remenList: [
      {
        img: '../../image/2.jpg',
        title: "世界上最大的动物",
        icon: '../../image/1.jpg',
        xcxName: '知识百宝箱'
      },
      {
        img: '../../image/3.jpg',
        title: "世界上神秘的动物之一",
        icon: '../../image/1.jpg',
        xcxName: '知识百宝箱'
      }
    ],
    xipinList: [
      {
        img: '../../image/3.jpg',
        title: "世界上神秘的动物之一",
        icon: '../../image/1.jpg',
        xcxName: '知识百宝箱'
      }
    ]
  },
  xuanzefun(v) {
    this.setData({
      xzact: v.currentTarget.dataset.index
    })
  },
  search() {
    console.log(this.data.inptxt)
  },
  inpchange(v) {
    this.setData({
      inptxt: v.detail.value
    })
  },
  showBigImg(v) {
    wx.getImageInfo({
      src: v.currentTarget.dataset.img,
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          },
        })
      }
    })
  },
  ewmnone() {
    this.setData({
      ewmact: false
    })
  },
  nodemdel() {
    this.setData({
      model: false
    })
  },
  typept(v) {
    this.setData({
      ewmact: true
    })
  },
  promotion() {
    this.setData({
      model: true
    })
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  }
})