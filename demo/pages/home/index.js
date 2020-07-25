
Page({
  data: {
    tuijianlist: [
      {
        url: "/pages/live7index/index",
        image: "../../image/aiqing.jpg",
        title: "你们的爱情意志力"
      },
      {
        url: "/pages/cai4index/index",
        image: "../../image/banner.jpg",
        title: "你的财运方向"
      },
      {
        url: "/pages/syindex/index",
        image: "../../image/sy.jpg",
        title: "事业上的成就"
      }
    ]
  },
  ceshi_btn(v) {
    console.log(v.target.dataset.url)
    tt.reLaunch({
      url: v.target.dataset.url
    });
  },
  onLoad: function (options) {

  }
})