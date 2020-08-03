// pages/result/index.js
Page({
  data: {
    list:[
      "你对金钱的欲望较强，在生活中费尽心思追求财富的增值，比旁人更容易积累起丰厚的家产。懂得生财之道的你将有着优秀的财富状况，令周围的人羡慕不已。可是对钱财的执念会成为你人生的最大弱点，一旦被人利用你将陷入万劫不复的深渊。在未来的日子里，提醒你在赚钱的过程中注意控制风险和欲望，对于不合常理的赚钱方法必须敬而远之，以免落入陷阱，搭上自己的下半生。",
      "你对社会上各种新鲜诱人的商品毫无抵抗能力，在消费方面毫无节制，超支对你来说是一件很常见的事情。在这种管不住手的情况下，你在的财富状况有点糟糕，深陷在拮据的生活中难以有所发展。不想自己的一生过得压抑不安，提议你在控制内心欲望的同时，想办法提高自己的赚钱能力。此外，你还要修炼出长远的眼光和广阔的胸怀，不要总是被眼前的杂事阻碍到你提升自我的机会。",
      "勤奋积极的你为了提升收入愿意吃苦，坚持依靠努力的汗水赚钱。而且你懂得量入为出的道理，在消费方面不会过于挥霍，因此你的财富依然能够保持良好的状况。不过单靠个人奋斗赚取的金钱回报始终有限制，假如能够让手中的资本不断膨胀增值，那么你在未来拥有的财富才能变得更加殷实。因此建议你从现在开始，认真学习各种投资理财的知识，让你的财富阶层在以后达到更高等级。",
      "你是一个不太懂得管钱的人，开销总是接近于你的收入，不管赚多少钱都难以有盈余，生活水平始终难以有跨度很大的飞跃。你在的财富状况实属中等，跟身边的人相比是比上不足比下有余。如果你希望自己拥有的财富能够稳步上升，不断积累下丰厚的家底，那么你应该从现有的收支情况开始分析，尽量做到开源节流，把手中一部分钱储蓄下来，作为以后投资生利的基础资本。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你的财富状况',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/cai2index/index?from=sharebuttonabc&otherkey=othervalue&id=49', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '24cg6o6dnd9f3fei79',
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