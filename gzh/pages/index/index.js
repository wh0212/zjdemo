Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        img: '../../image/Snipaste_2020-07-28_11-43-33.png',
        title: '超级变脸',
        type: '工具',
        describe: "的房价的看法东风快递发电量咖啡加快递费的框架咖啡机快点进的开发开始懂了疯狂老爹康复科进度款放假的金风科技放假的时间开发螺丝刀咖啡机",
        maxearnings: 13,
        proportion: 16,
        children: []
      },
      {
        img: '../../image/Snipaste_2020-07-28_11-43-33.png',
        title: '超级变脸',
        type: '趣味',
        describe: "的房价的看法东风快递发电量咖啡加快递费的框架咖啡机快点进的开发开始懂了疯狂老爹康复科进度款放假的金风科技放假的时间开发螺丝刀咖啡机",
        maxearnings: 13,
        proportion: 16,
        children: [{
            img: '../../image/Snipaste_2020-07-28_11-43-33.png',
            title: '测你前世喝了多少孟婆汤',
            share: '分享标题：【超准测试】测你前世对对对'
          },
          {
            img: '../../image/Snipaste_2020-07-28_15-07-12.png',
            title: '测你吃辣指数有多高',
            share: '分享标题：【超准测试】测你吃辣指数对对对'
          }
        ]
      }
    ]
  },
  fundeatil(v){
    console.log(v.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/pages/cp_detail/index?data='+JSON.stringify(v.currentTarget.dataset.item),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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