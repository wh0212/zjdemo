// pages/result/index.js
Page({
  data: {
    list:[
      "你缺乏自信、情绪敏感，在交往中总是担心自己表现得不够优秀，在大多数人面前都摆出一副拘谨小心的样子，不敢随意表达内心的想法和感受。久而久之，你在别人眼里成了一个性格内向腼腆的人，仿佛时刻都需要别人的保护和关心。实际上你并没有别人想象的那么柔弱，遇到问题时完全可以处理得有板有眼，让人刮目相看。假如希望在别人面前有更出色的表现，鼓励你相信自己的强大潜能，露出你外向的一面。",
      "你对外界没有安全感，总是担心被抛弃的潜意识令你不断地对所有人示好，并把内在的不良情绪全部压制住，在别人眼中似乎有着热情乐观的性格。但实际上你有点抗拒跟别人打交道，而且在独处时常常感到疲惫颓废，真实的性格与表现出来的有一定差距。在未来的人生里，认为你不要过分在意别人的态度和看法，应该遵照自己的意愿而活。就算偶尔在人前暴露出心中的负面情绪，你的社交形象也不会有太大变化。",
      "你的理性思维十分强大，对所遇事情的判断和看法比身边的人更加深刻，独特的意见常常直击别人的灵魂。可是你不太喜欢跟别人交流，就算心中又诸多想法都不会表现得夸夸其谈，在别人眼中最大的性格特点就是成熟稳重，让人不知不觉地想要依赖你。不管你在日常的人际交往中是否抱着独善其身的想法，建议你平时多在精神上帮助别人进步。当成为引领别人的精神导师时，你会发现自己的人生更加具有价值。",
      "你很随和。跟高冷完全扯不上边。周围人眼中你非常好相处。你会顾及到所有人的感受，说话办事让人很舒服。不过为了照顾好周遭的人，你可能会忽略了自己。这就是你最大的问题所在。因为偶尔你应该试着自我一点，因为你如何爱自己，就是教别人如何爱你。",
      "你比较开朗，在人际这一块，表现还不错，属于会来事儿的类型。但家中长辈可能会嫌弃你做事不把稳，认为你缺乏耐心，性格还需要磨砺。想对你说的是，长辈想要看到你为一件事付出长久的努力和坚持，他们期望你能成为一个肯吃苦耐劳的孩子。",
      "你的性格感到担忧。担心你不会为人处事，在社交方面容易吃亏，担心你因为性格的原因，找不到适合自己的另一半。但家中的长辈多半比较信任你，认为你是一个诚实懂事的好孩子。认为你的长辈想培养你的社交能力，希望你更开朗，更自信，希望你能多交点对自己有益的朋友。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你在别人眼中的性格',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/xg2index/index?from=sharebuttonabc&otherkey=othervalue&id=25', // ?后面的参数会在转发页面打开时传入onLoad方法
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