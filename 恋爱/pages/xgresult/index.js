// pages/result/index.js
Page({
  data: {
    list:[
      "你的性格内敛低调，不喜与人有太多接触，习惯躲在自己的小世界里安然度日。在别人眼里，难以靠近的你简直就是高冷的代言人，仿佛再多的热情都捂不热你的心。但实际上你的内心蕴含着丰富的情感，一旦碰上在乎的人，你的表现将变得截然不同。这种巨大的反差令你的人际关系维持在狭小的范围内，不太利于你的人生发展。在未来的日子里，提议你待人热情活跃一些，减少高冷形象给你带来的负面影响。",
      "大大咧咧的你藏不住心事，对身边的人总是显示出热情大方的样子，给人一种自然随意的亲切感，完全与高冷的形象沾不上边。虽然你的活泼开朗给身边的人带来无限的活力，但是口没遮拦的直率个性却令你很容易惹人不高兴，导致你的人际关系频繁出现问题。在往后的日子里，建议你学会控制自己的情绪和言词，在交往中多关心别人的感受，切勿因为一时无意而踩中别人的伤心处，从而给人留下不好的印象。",
      "你为人稳重淡定，很少在外人面前表现出剧烈的情绪波动，喜怒不形于色的样子令不熟悉的人感到高冷疏离，只有熟悉的人才懂得你的温暖和贴心。倘若希望在所有人面前都能得到良好的社会名声，提议你在交往中能够积极主动地向别人示好，用行动表现出你的细心与体贴，逐渐改变你在他人心中的形象。当你从高冷的样子逐渐过渡到亲切和蔼，你的人脉资源将变得丰富起来，对你未来的发展有着大大的益处。",
      "你很随和。跟高冷完全扯不上边。周围人眼中你非常好相处。你会顾及到所有人的感受，说话办事让人很舒服。不过为了照顾好周遭的人，你可能会忽略了自己。这就是你最大的问题所在。非常运势网因为偶尔你应该试着自我一点，因为你如何爱自己，就是教别人如何爱你。",
      "你确实有那么一点点自我，不过大多数时候你还是挺无私的。你会委屈自己去将就别人，你不会把自己的感受放在第一位，也不会放在最后一位，如果你愿意，你可以结交很多朋友。非常运势网认为你的个性刚刚好，不委屈自己，也不为难别人，能把自己周遭的人际关系处理的比较妥当。",
      "你确实是蛮自我的。长时间待在你身边的人一定是可以事事包容你的人，如果做不到包容，不可能与你相处的时间很长。所以其实那些长久忍耐你的人也不是很舒适。如果你想留住朋友，非常运势网建议你学着随和一点，偶尔照顾一下别人的感受，不要计较过多，不要总让别人来将就你，才能让自己和别人都舒服。"
    ],
    index:0,
    dateY:2020
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