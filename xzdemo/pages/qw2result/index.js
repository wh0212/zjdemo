// pages/result/index.js
Page({
  data: {
    list:[
      "你的个性较为内敛好静，平时在人前表现得温文尔雅，有着温柔贤淑的女生形象。在众多漂亮的婚纱里，你最适合穿上精致典雅的款式，凸显你的优雅气质。可是在挑选婚纱的过程中，周围的人会给你提供不同的意见，让你难以果断地做出选择。为了在婚礼上留下最深刻的回忆，建议你按照自己的感觉定下要穿的婚纱，切勿被别人的看法影响到你的决定，否则最后将会留下一丝说不清楚的遗憾。",
      "你是一个阳光活泼的小女生，天生带点不拘小节的豪爽，爱人跟你相处得十分轻松愉快。在跟心爱的人走进婚姻的重要仪式上，简约时尚的婚纱最适合你的形象与气质，并衬托出你的可爱与天真。不过旁人并不一定认同你大胆的眼光，对你喜欢的婚纱可能没有太多的良好评价。如果不想被烦心的事情影响到你的婚礼进程，认为你在挑选婚纱时不要过分标新立异，适当听取别人的意见并不是坏事。",
      "你的感情丰富细腻、文艺气息较重，对爱情有很多美妙甜蜜的幻想。在喜欢的人面前，你会变得柔弱依赖，不时激起对方心中的怜爱之情。当你跟心爱的人终于走到婚姻的殿堂时，浪漫甜美的婚纱就最适合你，让你成为另一半眼中最完美的新娘。但是婚后的生活与你想象的温馨幸福有着一定差距，假如你还没有足够的思想准备应付身份的转变，那么提议你深思熟虑后才结婚，以免产生心理落差。",
      "独立干练的你对婚姻大事有一套独到的见解，希望能一手包办自己的婚礼，给今生留下难忘的回忆。据分析，你最适合穿上华丽高贵的婚纱，在一众宾客前散发出如女王般的强大气场，立马成为全场唯一的焦点。不过耀眼的你很容易抢去另一半的风头，降低了他在婚礼上的存在感。不想另一半沦为你的陪衬，你应该让他有更多的发言机会，而你全程陪伴左右，扮演温顺可人的小妻子形象就好了。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '你最适合穿什么样的婚纱',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/qw2index/index?from=sharebuttonabc&otherkey=othervalue&id=57', // ?后面的参数会在转发页面打开时传入onLoad方法
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