// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list:[
      "也许是为生活奔波太辛苦，也许是因为在工作上的付出没有得到理想的回报，也可能是因为在过去的一年遇到了太多烦心的事，让你的魅力受到了情绪的压抑，要恢复不是一时半会就能实现的事，而且需要你自己主动走出来，去多吸收一点正能量。非常运势测试网有理由认为你在2020年被一见钟情的概率很低很低，基本不会发生。虽然你可能不会被一见钟情，但你如果一见钟情别人，不如试着主动一点，魅力的提升会因为你的心态做出改变哦！",
      "如果过去的一年不是身体健康方面欠佳，让你很长时间都需要在家宅着，就是因为家里很多事，让你不太有时间和朋友常见面，常聚会。这也就让你过去的一年少了很多人气的助力，就算有实力，也可能不容易被人发现，气质上都受到了影响。非常运势测试网认为你2020年被一见钟情的概率不大，可能更多的是对你第一印象还可以，舒服，下一次见面会记得你，但还谈不上动心。你在新的一年里，有时间最好都能多出去走一走，参加热闹的活动，对提升异性缘，提升气质都有好处。",
      "爱说爱笑的人，运气好不好可能不一定，但是受人欢迎确实是真的。虽然生活压力大，虽然过去的一年里生活工作也没有特别如意，但你总能从小事上发现一些令人开心的小确幸，所以你整体给人的感觉就是开朗大方的样子。非常运势测试网认为你只要能延续这种阳光的样子，就算颜值不算很亮眼，你2020年被一见钟情的概率也是比较大的。当然，一见钟情很浪漫，但不一定真的适合，要知道适不适合，还是需要时间真正相处才能确定哦！",
      "你骨子里是有点懒散的，你在没有真正约束，责任和义务之前，你可能有点得过且过的意思，不知道自己究竟要做什么，没有目标，没有方向，一时的心血来潮，也只是三天打鱼两天晒网的表现。对你来说，可能最有约束力的就是感情了，非常运势测试网有理由相信，结婚就是未来你发财的契机。首先你不会将就婚姻，如果不是自己真正爱着的人，你不会轻易走进婚姻，只要走进了婚姻，有了自己的责任和义务，奋斗也有了方向和动力，发财也就有了实现的资本。",
      "你喜欢热闹，喜欢交朋友，朋友多了确实好，但朋友也分很多种，塑料友情不仅浪费自己的时间精力，还可能会被欺骗和背叛，对你来说，真不用担心交不到朋友，要担心的是交到不值得交的朋友，也只有充满正能量，真心待你，能给你提出好建议的朋友才能为你的人生加分。非常运势测试网认为未来你发财的契机就是交友，交到在事业上对你有真正帮助的朋友，他可能不会总是支持你的一些想法，他可能刀子嘴豆腐心，但是他是真的为你好，也真的为你的收获而开心。",
      "你一直以来都有自己的人生目标，也一直都在为实现这个目标做准备，你的未来当然不会辜负你的努力付出，至少发财对你来说不会只是一个梦，你只是在等待这个契机的出现，在出现之前你需要充足的准备，毕竟你是一个很谨慎的人，你从来就不愿意打没有把握的仗。非常运势测试网认为你未来的发财契机应该就是创业，当你做好准备了，选择了一个适合自己的项目去创业的时候，就是你财富快速累积的开始。当然，万事开头难，不可能一帆风顺，但只要你坚持自己对的选择，未来的你就会感谢坚持的你。",
      "你对人生有着明确的目标和规划，并愿意付出相应的努力去实现理想。在大胆冒进的年轻时期，你拥有着诸多发财机会，在30岁之前就已经是同龄人之中的佼佼者，提前过上富裕轻松的人生。可是过早的成功很容易让你迷失自我，令你在往后的人生里渐渐失去奋斗的欲望，甚至有可能沦为时代的弃儿。不想自己的人生过得越来越糟糕，非常运势测试网建议你要及早养成良好的理财习惯，不要让享乐成为你赚钱的障碍。",
      "你的思维僵化古板，不了解当下的潮流和发展趋势，一直在用过时的眼光看待生活，几乎抓不住时代赐予你的每一个机遇。后知后觉的你起码要到50岁后才会开窍，即使从此走上发财之路，你的人生也已经浪费了一大半。若想扭转局面，非常运势测试网提议你平时多关注时事新闻，提升自己的认知水平，保持与社会同步发展的节奏，争取更多的赚钱机会。否则一旦被高速发展的时代抛弃，你的发财梦永远也实现不了。"
    ],
    index:0
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