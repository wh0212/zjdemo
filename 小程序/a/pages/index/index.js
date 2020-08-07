var that = this;
Page({
  data: {
    content: '',
    formats: {}, // 样式
    placeholder: '开始输入...',
    htmlSnip:""
  },
  onLoad() {
    that = this;
  },
  // 初始化编辑器
  onEditorReady() {
    wx.createSelectorQuery().select('#editor').context(function(res) {
      that.editorCtx = res.context

      if (wx.getStorageSync("content")) { // 设置~历史值
        that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      }

    }).exec()
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
    // that.setData({
    //   content: e.detail
    // })
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
      success: function(res) {
        console.log(res.html)
        that.setData({
          htmlSnip:res.html
        })
        wx.setStorageSync("content", res.html); // 缓存本地
        // < p > 备注说明：</p > <p>1、评分规则</p> <p>2、注意事项</p> <p>3、哈哈呵呵</p> <p><br></p><p><br></p>
      }
    })
  },
  // 清空所有
  clear() {
    this.editorCtx.clear({
      success: function(res) {
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
  // 记录样式
  format(e) {
    let {
      name,
      value
    } = e.target.dataset
    console.log(name,value)
    if (!name) return
    this.editorCtx.format(name, value)
  },
})