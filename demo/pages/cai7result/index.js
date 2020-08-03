
Page({
  data: {
    dateY: 0,
    list:[
      "你的聚财指数不是很高。眼看着钱已经存下来了，但是，身边有重要的人需要你的帮助，为对方花点钱，在你看来是理所应当的，虽然也心疼钱，但是对你而言能够帮到对方，这才是更重要的事情，所以想劝你一句，尝试着把钱看成身外之物吧，聚不了财不要紧，聚得了人气就不错了。",
      "你的聚财指数并不怎么样。很多花钱的地方等着你去买单，别说想省钱了，只要能够保证收支平衡，就算是不错的效果了，不过，需要你花钱的那些事对你来说都很重要，能够花钱去解决麻烦其实也是值得的，想对你说，既然年底聚不了财，不妨从其他方面寻找一些让你开心的事情吧。",
      "聚财指数还是挺高的，会有很多意外收获，不仅能够应付年底的最大开支，储蓄方面还会有所增长，因为手里有钱，年底的时候花钱可能也会花得挺爽快的，不过，还是建议你做一些详尽的理财计划，有钱也得省着点花，小心过完年，要面对财务危机，手头紧张，无法调整好状态。",
      "你的聚财指数并不怎么样。很多花钱的地方等着你去买单，别说想省钱了，只要能够保证收支平衡，就算是不错的效果了，不过，需要你花钱的那些事对你来说都很重要，能够花钱去解决麻烦其实也是值得的，想对你说，既然年底聚不了财，不妨从其他方面寻找一些让你开心的事情吧。",
      "你的聚财指数超高，花钱的同时会有进账，各种促销活动中竟然能够屡屡获得优惠的机会，花小钱就能买到自己喜欢的东西，所以也会因此存下钱来，人际交往中人气颇高，有朋友能够为你介绍一些靠谱的兼职机会，这些机会也能令你赚到一笔钱。祝你过一个富足愉快的年。"
    ],
    index:0
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你的聚财指数多高',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/cai7index/index?from=sharebuttonabc&otherkey=othervalue&id=8', // ?后面的参数会在转发页面打开时传入onLoad方法
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