
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
    ]
  },
  ceshi_btn(v) {
    tt.reLaunch({
      url: v.target.dataset.url
    });
  },
  onLoad: function (options) {
  
  }
})