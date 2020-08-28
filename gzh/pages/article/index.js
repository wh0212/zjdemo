import Request from "../../utils/request";
const qiniuUploader = require("../../utils/qiniuUploader");
Page({
  data: {
    inptxt: "",
    lanmu: "请选择",
    array: [],
    index: 0,
    content: '',
    formats: {}, // 样式
    placeholder: '开始编辑...',
    htmlSnip: "",
    showUpload: true,
    uploaderList: [],
    uploaderNum: 0,
    token: "",
    imageUrl: ""
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      lanmu: this.data.array[e.detail.value].title
    })
  },
  addbtn() {
    let { inptxt, lanmu } = this.data;
    console.log(lanmu)
    var that = this;
    if (!inptxt || lanmu == "请选择") {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
    } else {
      Request({
        url: "api/Article/articleadd",
        method: "get",
        data: {
          title: that.data.inptxt,
          article_class_id: that.data.array[that.data.index].id,
          article_content: that.data.content.html,
          image: that.data.imageUrl,
          token: wx.getStorageSync('login').token,
          moblie: wx.getStorageSync('phone')
        }
      }).then((res) => {
        wx.showToast({
          title: '添加成功',
          icon: "success"
        })
        that.editorCtx.clear({
          success: function (res) {
            console.log("清空成功")
          }
        })
        that.setData({
          inptxt: "",
          lanmu: "请选择",
          uploaderList: [],
          showUpload: true
        })
      })
      console.log(this.data)
    }
  },
  inpchange(e) {
    this.setData({
      inptxt: e.detail.value
    })
  },
  //上传图片
  upload: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1 - that.data.uploaderNum,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        var image = res.tempFilePaths[0]
        var sj = new Date().getTime() + parseInt(Math.random() * 100000, 10) + 1
        qiniuUploader.upload(image, res1 => {

          that.setData({
            //注意这中间有个"/"
            tempFilePaths: "https://tgadmin.clvtmcn.cn" + "/" + res1.key,
            imageUrl: 'http://' + res1.imageURL
          })
          console.log(that.data.tempFilePaths)
        }, (error) => {
          console.log('error' + error)
        }, {
          //这里是你所在大区的地址
          uploadURL: 'https://upload-z2.qbox.me/',
          domain: 'img.kuaigoutui.com/',
          //这里的uptoken是后端返回来的
          uptoken: that.data.token,
          qiniuShouldUseQiniuFileName: false,
          shouldUseQiniuFileName: false,
          key: sj
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        let uploaderList = that.data.uploaderList.concat(tempFilePaths);
        if (uploaderList.length == 1) {
          that.setData({
            showUpload: false
          })
        }
        that.setData({
          uploaderList: uploaderList,
          uploaderNum: uploaderList.length,
        })
      }
    })
  },
  // 删除图片
  clearImg: function (e) {
    var nowList = [];//新数据
    var uploaderList = this.data.uploaderList;//原数据

    for (let i = 0; i < uploaderList.length; i++) {
      if (i == e.currentTarget.dataset.index) {
        continue;
      } else {
        nowList.push(uploaderList[i])
      }
    }
    this.setData({
      uploaderNum: this.data.uploaderNum - 1,
      uploaderList: nowList,
      showUpload: true
    })
  },
  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/Article/qiniutoken",
      method: "get",
      data: {
        token: wx.getStorageSync('login').token
      }
    }).then((res) => {
      that.setData({
        token: res.data.qiniu_token
      })
    })
    Request({
      url: "api/small/lists",
      method: "get"
    }).then((res) => {
      console.log(res.data)
      that.setData({
        array: res.data
      })
    })
  },
  // 返回选区已设置的样式
  onStatusChange(e) {
    // console.log(e.detail)
    const formats = e.detail
    this.setData({
      formats
    })
  },
  // 内容发生改变
  onContentChange(e) {
    // console.log("内容改变")
    // console.log(e.detail)
    this.setData({
      content: e.detail
    })
    // wx.setStorageSync("content", e.detail)
  },
  // 失去焦点
  onNoFocus(e) {
    // console.log("失去焦点")
    // console.log(e.detail)
    // that.setData({
    //   content: e.detail
    // })
    // wx.setStorageSync("content", e.detail)
  },
  // 获取内容
  clickLogText(e) {
    that.editorCtx.getContents({
      success: function (res) {
        console.log(res.html)
        that.setData({
          htmlSnip: res.html
        })
        wx.setStorageSync("content", res.html); // 缓存本地
        // < p > 备注说明：</p > <p>1、评分规则</p> <p>2、注意事项</p> <p>3、哈哈呵呵</p> <p><br></p><p><br></p>
      }
    })
  },
  // 清空所有
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("清空成功")
      }
    })
  },
  // 清除样式
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log(res)
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '90%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  // 初始化编辑器
  onEditorReady() {
    var that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context

      if (wx.getStorageSync("content")) { // 设置~历史值
        that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      }

    }).exec()
  },
  // 记录样式
  format(e) {
    let {
      name,
      value
    } = e.target.dataset
    console.log(name, value)
    if (!name) return
    this.editorCtx.format(name, value)
  },
  onReady: function () {

  },
  onShow: function () {

  },


  onHide: function () {

  },

  onUnload: function () {

  },

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