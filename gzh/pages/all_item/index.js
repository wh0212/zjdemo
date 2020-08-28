import Request from "../../utils/request";
Page({
  data: {
    aboutList: [],
    inptxt: "",
    xzact: 0,
    model: false,
    ewmact: false,
    abtItem: 0,
    navact: 0,
    navItem: {name: '综合'},//默认类目
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
      },
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
      },
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
      },
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
      },
      {
        img: '../../image/2.jpg',
        title: "世界上最大的动物",
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
    ],
    searchAct: false,
    rmpage: 1,
    zjpage: 1,
    sspage: 1
  },
  navitem(v){
    console.log(v)
    this.setData({
      navact:v.currentTarget.dataset.index
    })
  },
  tolower() {
    if (this.data.xzact == 0 && !this.data.searchAct) {
      console.log("单品到底了")
    } else if (this.data.xzact == 1 && !this.data.searchAct) {
      console.log("最新到底了")
    } else {
      console.log("搜索到底了")
    }
  },
  aboutfun(v) {
    var that = this;
    this.setData({
      abtItem: v.currentTarget.dataset.index
    })
    Request({
      url: "api/small/lists",
      method: "get",
      data: {
        class_id: v.currentTarget.dataset.index
      }
    }).then((res) => {
      console.log(res.data)

    })
  },
  xuanzefun(v) {
    this.setData({
      xzact: v.currentTarget.dataset.index
    })
  },
  search() {
    var that = this;
    if (this.data.inptxt == "") {
      wx: wx.showToast({
        title: '请输入要搜索的内容',
        icon: 'none'
      })
    } else {
      Request({
        url: "api/small/lists",
        method: "get",
        data: {
          name: that.data.inptxt
        }
      }).then((res) => {
        console.log(res, "shuzu")
        var list =[]
        res.data.map((v)=>{
         list.push(...v.children)
        })
        console.log(list)
        that.setData({
          remenList: list
        })
        console.log(that.data.list)
      })
      this.setData({
        searchAct: true
      })
    }
  },
  inpchange(v) {
    if (!v.detail.value) {
      this.setData({
        searchAct: false
      })
    }
    this.setData({
      inptxt: v.detail.value
    })
  },
  typept(v) {
    this.setData({
      ewmact: v.detail.ewmact
    })
  },
  promotion() {
    this.setData({
      model: true
    })
  },
  onLoad: function (options) {
    var that = this;
    Request({
      url: "api/small/lists",
      method: "get",
    }).then((res) => {
      console.log(res.data)
      that.setData({
        aboutList: res.data
      })
    })
    this.setData({
      xzact: options.type
    })
  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  }
})