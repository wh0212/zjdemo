// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list:[
      "你是一个完美主义者，无法容忍你所处的世界出现一点细小的瑕疵，认识你的人几乎都能看出你有着明显的精神洁癖。在日常生活中，你不仅希望所处的环境能够达到你的要求，还常常强制身边的人按照你的准则行事，不知不觉间惹人厌烦憎恨。不想把人际关系弄得一团糟，建议你尽量提升自己的容忍度，不要随意在人前提起你不满意的人和事，以免因为误解而造成风波不断，从而给你的人生蒙上一层阴影。",
      "你是一个内心充满矛盾的人。你非常想当一个好人，但很多时候你会怀疑自己坚持善良是否值得，尤其是在受到伤害的时候，你就会认为善良可能是愚蠢的。想对你说的是，保持内心的善良是很有必要的，但是，你的善良还得有点锋芒，你要学会用慧眼去看世界，等你能够辨别忠奸的时候，你就不那么容易受伤了",
      "你是一个既自卑又骄傲的人。你的内心非常敏感，你很容易受伤，但你却不想让旁人看到你受伤的状态，有时候你很自傲，总会摆出一副目空一切的样子。这是因为你不想让人看穿你的自卑。想对你说的是，你大可不去在意旁人对你的看法，按自己的想法生活就好，这样就不会被自卑感困扰了。",
      "你喜欢交朋友，喜欢与不同的人相处，会主动了解新事物，新知识，新的社会变化，也会用心品尝生活中酸甜苦辣的各种滋味，认真思考，从中领悟到对自己人生发展有帮助的道理。你坚持自己对的，也会听取别人对的建议，你认可世界大不同，各人有各人的兴趣爱好，你不会轻易被人影响，也不会去干涉别人的决定，这也是你能与人相谈甚欢，相处愉快的理由。认为你心胸开阔，一点精神洁癖都没有，相信人际关系的发展应该很好。",
      "你是个老好人，几乎属于有求必应的那一类型，你可能不太敢拒绝别人的要求，所以经常会因此而吃亏，你希望周围的人给你好的评价，于是不断满足他们的需求，这么做或许很累，不过你的确因此得到了各种赞赏，可是，认为你应该想想委屈自己，讨好别人，得到了的赞赏，值得吗？",
      "你是一个极要面子的人。要面子也代表了你的自尊心很强，你很怕被人轻视，你希望自己能把所有事情都处理好，并且依靠自己的独立能力让人生变得精彩起来，这种渴望太强烈，所以你总会寻找捷径。想对你说的是，急于求成，不会有好结果，耐着性子奋斗吧，该来的总会来的。",
      "你对人生有着明确的目标和规划，并愿意付出相应的努力去实现理想。在大胆冒进的年轻时期，你拥有着诸多发财机会，在30岁之前就已经是同龄人之中的佼佼者，提前过上富裕轻松的人生。可是过早的成功很容易让你迷失自我，令你在往后的人生里渐渐失去奋斗的欲望，甚至有可能沦为时代的弃儿。不想自己的人生过得越来越糟糕，建议你要及早养成良好的理财习惯，不要让享乐成为你赚钱的障碍。",
      "你是一个既自卑又骄傲的人。你的内心非常敏感，你很容易受伤，但你却不想让旁人看到你受伤的状态，有时候你很自傲，总会摆出一副目空一切的样子。这是因为你不想让人看穿你的自卑。想对你说的是，你大可不去在意旁人对你的看法，按自己的想法生活就好，这样就不会被自卑感困扰了。"
    ],
    index:0
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '看你是一个怎样的人',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/xg4index/index?from=sharebuttonabc&otherkey=othervalue&id=27', // ?后面的参数会在转发页面打开时传入onLoad方法
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