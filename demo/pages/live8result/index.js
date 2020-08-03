// pages/result/index.js
Page({
  data: {
    list:[
      "你的另一半最大的魅力就是成熟，和成熟的人在一起不用太累心，对方考虑问题能面面俱到，但这样的人可能会显得有点冷漠，没了孩子气的一面，凡事就只分析利弊，生活可能会缺了点浪漫和趣味。相信成熟的伴侣能把你照顾得很好，也能带你共同追求更美好的生活。",
      "你的另一半最大的魅力就是知性，对方懂道理，讲道理，善解人意，是你可以倾诉烦恼的速度，也能教给你很多做人的原则，提升你为人处事方面的能力，跟这样的伴侣相处最大的感受就是舒适。相信你能和知性的另一半享受平稳而舒适的生活，无论物质状况如何，心里的感受是美好的。",
      "你的另一半最大的魅力就是知性，对方懂道理，讲道理，善解人意，是你可以倾诉烦恼的速度，也能教给你很多做人的原则，提升你为人处事方面的能力，跟这样的伴侣相处最大的感受就是舒适。相信你能和知性的另一半享受平稳而舒适的生活，无论物质状况如何，心里的感受是美好的。",
      "你的另一半最大的魅力就是执着，不管做什么事一定会坚持做到底，不会半途而废，对感情同样如此非常专一，爱上一个人就爱到底，没那么容易变心，但执着的人容易钻牛角尖。非常运势网希望你能用自己的柔情化解对方身上尖利的一面，同时保护对方的棱角，这样你才能在拥有对方魅力的同时，感受一份坚定不移的爱。",
      "你的另一半最大的魅力就是坚韧，不管做什么事一定会坚持做到底，不会半途而废，对感情同样如此非常专一，爱上一个人就爱到底，没那么容易变心，但执着的人容易钻牛角尖。非常运势网希望你能用自己的柔情化解对方身上尖利的一面，同时保护对方的棱角，这样你才能在拥有对方魅力的同时，感受一份坚定不移的爱。",
      "你的另一半最大的魅力就是成熟，和成熟的人在一起不用太累心，对方考虑问题能面面俱到，但这样的人可能会显得有点冷漠，没了孩子气的一面，凡事就只分析利弊，生活可能会缺了点浪漫和趣味。非常运势网相信成熟的伴侣能把你照顾得很好，也能带你共同追求更美好的生活。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试另一半的魅力',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/live8index/index?from=sharebuttonabc&otherkey=othervalue&id=16', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '2kh936c8dg672h134n',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
  onLoad: function (options) {
    tt.setNavigationBarTitle({
      title: "结果"
    });
     var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    var pos = Math.round(Math.random() * (this.data.list.length - 1))
    console.log(pos)
    this.setData({
      index:pos,
      dateY:Y
    })
  }
})