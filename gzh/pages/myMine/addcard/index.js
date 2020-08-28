import Request from "../../../utils/request";
Page({
  data: {
    kaabout: 0,
    check: false,
    inptxt: "",
    sfzcount: "",
    promk: {
      huhang: "请选择办卡银行",
      kacount: "",
      yuphone: ""
    },
    promzfb: {
      zhphone: "",
      yuliuphone: ""
    },
    showmodel: false,
    array: ['招商银行', '中国工商银行', '中国农业银行', '中国建设银行', '中国邮政储蓄银行', '交通银行', '上海浦东发展银行', '中国民生银行', '中国光大银行', '广发银行', '平安银行', '中国银行', '中信银行', '网商银行', '华夏银行'],
  },
  nonemodel() {
    this.setData({
      showmodel: false
    })
  },
  querenfun() {
    var that = this;
    if (that.data.kaabout == 0) {
      console.log("银行卡")
      Request({
        url: "api/Bankcard/bankadd",
        method: "get",
        data: {
          bank_name: that.data.promk.huhang,
          bank: that.data.promk.kacount,
          member_id: wx.getStorageSync('member_id'),
          name: that.data.inptxt,
          phone: that.data.promk.yuphone,
          idcard: that.data.sfzcount,
          token: wx.getStorageSync('login').token
        }
      }).then((res) => {
        wx.navigateTo({
          url: '/pages/myMine/wallet/index',
        })
      })
    } else {
      console.log("支付宝")
      Request({
        url: "api/Bankcard/alipayadd",
        method: "get",
        data: {
          alipay_name: that.data.promzfb.zhphone,
          member_id: wx.getStorageSync('member_id'),
          name: that.data.inptxt,
          phone: that.data.promzfb.yuliuphone,
          idcard: that.data.sfzcount,
          token: wx.getStorageSync('login').token
        }
      }).then((res) => {
        console.log(res)
        wx.navigateTo({
          url: '/pages/myMine/wallet/index',
        })
      })
    }
  },
  bindPickerChange(v) {
    this.setData({
      'promk.huhang': this.data.array[v.detail.value]
    })
  },
  addbtn() {
    var { kaabout, check, inptxt, sfzcount, promk, promzfb } = this.data;
    var that = this;
    if (!inptxt || !sfzcount) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
    } else {
      if (!check) {
        wx.showToast({
          title: '请同意规则',
          icon: 'none'
        })
      } else {
        var phone = that.data.promk.yuphone;
        var zfbphone = that.data.promzfb.yuliuphone;
        var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        if (!/^1(3|4|5|7|8)\d{9}$/.test(phone) || !/^1(3|4|5|7|8)\d{9}$/.test(zfbphone)) {
          wx.showToast({
            title: '手机号格式不正确',
            icon: "none"
          })
          return
        }
        if (!reg.test(that.data.sfzcount)) {
          wx.showToast({
            title: '身份证格式不正确',
            icon: "none"
          })
          return
        }
        this.setData({
          showmodel: true
        })
      }
    }
  },
  zfbphonechange(v) {
    this.setData({
      'promzfb.yuliuphone': v.detail.value
    })
  },
  zfbchange(v) {
    this.setData({
      'promzfb.zhphone': v.detail.value
    })
  },
  yuliuphone(v) {
    this.setData({
      'promk.yuphone': v.detail.value
    })
  },
  kachange(v) {
    this.setData({
      'promk.kacount': v.detail.value
    })
  },
  phonechange(v) {
    this.setData({
      sfzcount: v.detail.value
    })
  },
  inpchange(v) {
    this.setData({
      inptxt: v.detail.value
    })
  },
  check(v) {
    this.setData({
      check: !this.data.check
    })
    console.log(this.data.check)
  },
  aboutka(v) {
    this.setData({
      kaabout: v.currentTarget.dataset.id
    })
  },
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