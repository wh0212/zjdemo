// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list:[
      "你不会单身太久的，再熬一熬，就能等到你想要的爱情了，其实现在你的状态非常适合恋爱，只要你愿意主动出击，爱情很快就会被你纳入囊中。遇到了恋爱的机会千万不要错过，但也不可以过分冲动，想清楚再开始，把握节奏，才能顺利抵达幸福终点，得到自己期待中的恋人。",
      "你还要经过漫长的等待，才能得到你想要的爱情。你不够成熟，心动的时刻很容易发生，但你总是会错过机会，如果现在谈恋爱，其实也不会很好的结果。建议你先调整自己为人处事的能力，提升自己的情商，当你有了一定的改变后，你才能很好的面对感情方面的状况，那时候才能等来你要的爱情。",
      "如果你想谈恋爱随时都能脱单，其实现在的你自身条件已经很不错了，只是对爱情的期待还很高，还弄不清楚自己想要的究竟是怎样的感情，所以你只能继续等待下去，等适合你的人出现，感觉对了，自然也就能脱单了。想对你说的是，弄清楚自己的情感需求，才可得到幸福，切勿盲目的追求爱情。",
      "如果要脱单随时都可以，但你就是把握不住机会，总是与爱情擦肩而过，你的情感嗅觉太迟钝了，身边有喜欢你的人，你自己却感觉不到，有适合自己的恋爱对象出现了，你同样也是熟视无睹，建议你留意一下身边的人，不要太挑剔，如果对谁有好感，试着相处看看，就能得到自己想要的幸福。"
    ],
    index:0
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你还要单身多久',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/live4index/index?from=sharebuttonabc&otherkey=othervalue&id=13', // ?后面的参数会在转发页面打开时传入onLoad方法
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