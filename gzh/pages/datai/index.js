// pages/datai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ind: 0,
    ptlist: ['产品排行', '收益排行', '抖音粉丝'],
    listhy: [
      {
        img: '../../image/Snipaste_2020-07-28_11-43-33.png',
        title: '大头哥(短视频教学)...',
        price: 82690.32
      },
      {
        img: '../../image/Snipaste_2020-07-28_15-07-12.png',
        title: '大头哥(短视频教学)...',
        price: 82690.32
      },
      {
        img: '../../image/Snipaste_2020-07-28_11-43-33.png',
        title: '大头哥(短视频教学)...',
        price: 82690.32
      },
      {
        img: '../../image/Snipaste_2020-07-28_15-07-12.png',
        title: '大头哥(短视频教学)...',
        price: 82690.32
      }
    ],
    listcp: [
      {
        img: '../../image/2.jpg',
        title: "世界上最大的动物",
        icon: '../../image/1.jpg',
        xcxName: '知识百宝箱'
      }
    ],
    listdy: [
      {
        img: '../../image/Snipaste_2020-07-28_11-43-33.png',
        title: '大头哥',
        price: 82690.32
      }
    ],
    model:false,
    ewmact:false
  },
  typept(v) {
    this.setData({
      ewmact:v.detail.ewmact
    })
  },
  promotion() {
    this.setData({
      model: true
    })
  },
  ptbtn(v) {
    this.setData({
      ind: v.currentTarget.dataset.index
    })
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  }
})