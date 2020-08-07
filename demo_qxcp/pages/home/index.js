
Page({
  data: {
    tuijianlist: [
      {
        url: "/pages/live7index/index",
        image: "../../image/aiqing.jpg",
        title: "你们的爱情意志力"
      },
      {
        url: "/pages/sy7index/index",
        image: "../../image/sy7.jpg",
        title: "你会不会被赏识"
      },
      {
        url: "/pages/cai7index/index",
        image: "../../image/cai7.jpg",
        title: "你的聚财指数"
      }
    ],
    list: [
      {
        name: '全部',
        id: 0
      },
      {
        name: '性格',
        id: 1
      },
      {
        name: '情感',
        id: 2
      },
      {
        name: '事业',
        id: 3
      },
      {
        name: '职场',
        id: 4
      },
      {
        name: '财富',
        id: 5
      },
      {
        name: '智商',
        id: 6
      },
    ],
    active: 0,
    scrollTop: 0
  },
  activefun(v) {
    console.log(v.currentTarget.dataset.index, "11")
    this.setData({
      active: v.currentTarget.dataset.index
    })
    this.selectComponent('#about').listfun(v.currentTarget.dataset.index);
  },
  activefun2(v) {
    console.log(v.currentTarget.dataset.index, "22")
    this.setData({
      active: v.currentTarget.dataset.index
    })
    this.selectComponent('#about2').listfun(v.currentTarget.dataset.index);
  },
  ceshi_btn(v) {
    tt.reLaunch({
      url: v.target.dataset.url
    });
  },
  onLoad: function (options) {

  },
  onPageScroll: function (ev) {
    console.log(ev)
    if (ev.scrollTop > 160) {
      this.selectComponent('#about2').listfun(this.data.active);
    }else{
       this.selectComponent('#about').listfun(this.data.active);
    }
    this.setData({
      scrollTop: ev.scrollTop
    })
  },
})