// pages/result/index.js
Page({
  data: {
    list:[
      "你自卑而敏感，内心完全没有一点安全感， 在交往中习惯迎合别人的意思，不敢有任何的反对或者不高兴，给人留下一副极其窝囊的形象。尽管你很少在人前表现自己的委屈和难过，但是负面的情绪还是会在你的心底慢慢沉淀，让你饱受煎熬。不想被别人的欺负搞得忍无可忍，提议你不断建设自己的强大心理，尽量降低旁人想法对你的影响。只有变得强势有主见，你才能彻底撕掉身上已有的窝囊标签。",
      "你的情绪控制能力较弱，不管跟任何人交往都是直来直往的样子，只要感到不愉快就会马上发泄，完全看不出窝囊的痕迹。可是你的冲动并不能很好地解决问题，反而还会增加你跟别人的矛盾，不利于你维护人际关系。在未来的生活中，认为你应该适当收敛一下身上的锋芒，对某些不涉及原则的事情做些忍耐和让步，才能跟身边的人更好的相处下去。否则一旦被周围的人孤立，你的处境将变得异常艰难。",
      "个性软弱的你跟人交往时总是有点胆怯害羞，总是开不了口拒绝别人的任何请求，在社交生活中难免过得憋屈受气。可是一味的忍让不仅得不到别人的认同，还令大家觉得你窝囊没有用，对你的心灵造成沉重的打击。如果希望未来可以活得更加幸福自在，鼓励你做个勇敢的人，在人前能够大胆说出你的意见和感受，不要把所有的压力和责任都揽在自己身上。变得无所畏惧的时候，你将不会活得如此窝囊。",
      "你是一个平和温顺的人，一般情况不喜欢跟别人发生冲突，有着超好的忍耐能力。为了保持自身生活的平静和安宁，你就算受到别人的压制也不会轻易反抗，看起来似乎有点窝囊畏缩。但实际上你的心智较为刚毅成熟，决不允许别人挑战你的底线，倘若有人越界你将一反常态，形象突然变得强硬有力，其中的反差令人大吃一惊。若想改变身边众人对你的看法，建议你收起怕事的样子，大方自信地处事。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '你的窝囊指数是多少',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/xg2index/index?from=sharebuttonabc&otherkey=othervalue&id=51', // ?后面的参数会在转发页面打开时传入onLoad方法
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