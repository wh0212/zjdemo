import Request from "../../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: {},
    zsy: 0,
    yue: 0
  },
  tixian() {
    if (this.data.yue == 0) {
      wx.showToast({
        title: '余额不足无法提现',
        icon: "none"
      })
    } else {
      var that = this;
      wx.showActionSheet({
        itemList: ['银行卡', '支付宝'],
        success(res) {
          var type = res.tapIndex == 0 ? 1 : 2; //1-银行卡 2-支付宝
          // 银行卡或支付宝
          Request({
            url: "api/Bankcard/pay_list",
            method: "get",
            data: {
              member_id: wx.getStorageSync('member_id'),
              token: wx.getStorageSync('login').token
            }
          }).then((res) => {
            console.log(res.data)
            var yhlist = [];
            var zfblist = [];
            var yhitem = res.data.bank_card;
            var zfbitem = res.data.alipay
            res.data.bank_card.map((v, i) => {
              yhlist.push(v.bank_name)
            })
            res.data.alipay.map((v, i) => {
              zfblist.push(v.alipay_name)
            })
            // 银行卡
            if (type == 1) {
              wx.showActionSheet({
                itemList: yhlist,
                success(res) {
                  console.log(res.tapIndex, "yhk选择")
                  yhitem.map((v, ind) => {
                    if (res.tapIndex == ind) {
                      console.log(v.id, "ddfasdfdsf")
                      that.tixianPrice(v.id)
                    }
                  })
                },
                fail(res) {
                  console.log(res.errMsg)
                }
              })
            } else {//支付宝
              wx.showActionSheet({
                itemList: zfblist,
                success(res) {
                  console.log(res.tapIndex)
                  zfbitem.map((v, i) => {
                    if (res.tapIndex == i) {
                      console.log(v.id, "ddfasdfdsf")
                      that.tixianPrice(v.id)
                    }
                  })
                },
                fail(res) {
                  console.log(res.errMsg)
                }
              })
            }
          })
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    }
  },
  tixianPrice(v) {
    console.log(v, "选择的id")
    var that = this;
    wx.showModal({
      title: '提示',
      content: '您确定要提现吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          Request({
            url: "api/Bankcard/pay",
            method: "get",
            data: {
              pay_type: 1,
              id: v,
              price: that.data.yue,
              token: wx.getStorageSync('login').token
            }
          }).then((res) => {
            wx.showToast({
              title: '提现成功',
            })
            Request({
              url: "api/Member/memberinfo",
              method: "get",
              data: {
                member_id: wx.getStorageSync('member_id'),
                token: wx.getStorageSync('login').token
              }
            }).then((res) => {
              that.setData({
                zsy: res.data.price,
                yue: res.data.tixian_price
              })
            })
            Request({
              url: "api/Member/monthprice",
              method: "get",
              data: {
                member_id: wx.getStorageSync('member_id'),
                token: wx.getStorageSync('login').token
              }
            }).then((res) => {
              console.log(res.data)
              that.setData({
                money: res.data
              })
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          wx.showToast({
            title: '取消成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      zsy: options.shouyi,
      yue: options.yue
    })
    var that = this;
    Request({
      url: "api/Member/monthprice",
      method: "get",
      data: {
        member_id: wx.getStorageSync('member_id'),
        token: wx.getStorageSync('login').token
      }
    }).then((res) => {
      console.log(res.data)
      that.setData({
        money: res.data
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