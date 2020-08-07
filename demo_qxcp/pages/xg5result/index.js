// pages/result/index.js
Page({
  data: {
    list:[
      "27岁你会遇到另一半，应该说你在最好的年龄遇到了自己最应该遇到的人。你可以把最美的时光分享给对方，跟对方共度一段轻松而愉悦的浪漫生活。但不能确保你们的爱情会持续下去，激情中有一天会褪去，就像你的青春一样会消失不见，希望到了那时候你还能经营好你们的关系。",
      "你会在31岁的时候遇到另一半。或许到了那样的年龄，你对爱情的期待逐渐减小。在感情方面没有那么多的需求。但不管怎样，另一半的出现让你感到无比庆幸。你觉得自己很幸福。相信你们会创造奇迹一般的爱情故事，一直生活也因为另一半的出现，而变得充实又精彩。",
      "29岁你会遇到你的另一半，在你最想结婚的年龄遇到了对方，你觉得自己非常幸运，你们的感情发展非常顺利，在周遭人的帮助下，你们会快速成眷侣。单从感情来看，认为你的人生情感经历还挺圆满挺顺利的，至少你的感情令大多数人感到羡慕。",
      "你在刚刚出入社会的时候，真的应该好好的把时间，精力都用在工作上，你的努力付出会得到应有的回报，而且这个时候你的另一半都还不会出现，出现的都是一些只能停留在暧昧关系的人，不值得你花时间精力去经营，你这个时候把事业经营好，做出成绩了，在对的人出现的时候，也就更有自信心去面对。认为你应该会在二十五岁左右的时间能遇到合适的另一半，这个时间其实刚刚好，比起刚出入社会的时候成熟很多，也有了一定的经济实力，相信感情的发展也会顺利很多。",
      "你会在35岁的年龄遇到另一半。在跟对方相遇的那一刻，你觉得自己之前曾经经历过的失败感情都是值得的，因为拥有了那些失败的经历，你才能更好的去爱另一半。你们的关系也会无比紧密。相信在你遇到另一半的时候会很幸福，会有一种漫长的等待也值得的感觉。",
      "你对爱情一定是有期望的，特别是看到别人甜甜的恋爱时，就更着急了，只是，缘分有早有晚，适合别人的不一定适合你，所以你真的不用因为看到别人甜蜜的恋爱而心急，因为缘分急也是急不来的，认为你应该会要到二十八岁左右的年龄，才会遇到合适的另一半，这个时候的你，不管是心理，还是经济上应该都准备的比较好了，也知道自己想要什么，适合什么，感情上也就能少走弯路，虽然可能比起浪漫的爱情要平淡一点，不过朴实的感情更经得起时间考验，也有属于平淡的甜蜜哦！"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你什么时候遇到另一半',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/xg5index/index?from=sharebuttonabc&otherkey=othervalue&id=28', // ?后面的参数会在转发页面打开时传入onLoad方法
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