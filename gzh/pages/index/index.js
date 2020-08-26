Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      img: '../../image/Snipaste_2020-07-28_11-43-33.png',
      title: '知识百宝箱',
      type: '工具',
      describe: "知识就是力量，知识经济时代，科学技术是第一生产力 在当今这个社会，应试教zhi育处于顶峰的社会，需要的是有广博知识的人，所以从清华北大出来的学生总是能够更容易的找到工作，虽然我们知识比不上人家，这个社会需要的是有专业知识的好的人，人家老总找人第一是看你专业知识，而不是看你其他的。",
      maxearnings: 13,
      proportion: 16,
      ewmact: false,
      children: [
        {
          img: '../../image/1.jpg',
          title: '世界上最大的动物是谁',
          share: '分享标题:谁是世界上最大的动物'
        },
        {
          img: '../../image/2.jpg',
          title: '宇宙大爆炸什么样子',
          share: '分享标题:宇宙大爆炸什么样子'
        },
        {
          img: '../../image/3.jpg',
          title: '世界最神秘动物之一',
          share: '分享标题:世界最神秘动物之一'
        }
      ]
    }
    ],
    model: false
  },
  showBigImg(v) {
    wx.getImageInfo({
      src: v.currentTarget.dataset.img,
      success: (res) => {
        console.log(res)
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
    console.log(4)
    this.setData({
      model: false
    })
  },
  typept(v) {
    console.log(v.currentTarget.dataset.pt)
    this.setData({
      ewmact: true
    })
  },
  promotion() {
    console.log(3)
    this.setData({
      model: true
    })
  },
  fundeatil(v) {
    console.log(v.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/pages/cp_detail/index?data=' + JSON.stringify(v.currentTarget.dataset.item),
    })
  },

  onLoad: function (options) {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  }
})