// pages/result/index.js
Page({
  data: {
    list: [
      "脚踏实地、稳扎稳打是你的生活哲学，苦读加上不断温习，让你学习来的知识永远不会忘记。在大家眼中你也是个好学努力的乖孩子，不过你要注意的是，不要一味埋头学习苦读。而是要把学到的知识活用，以及尽可能多的与别人互动，因为这样能让你得到更多的意想不到的智慧。只要想通这点，你旧能成为站在颠峰的人，而非只有理论的学者。",
      "你是无师自通的天才梦想家，轻易就能学会别人难以学会的事物，洞悉问题关键，你花在思考上的时间永远超过空谈，并且行动力也很足够，可以算是最有学习天赋的人。唯一注意的是你自负的雄心，这点会抑制你继续向上发展的潜力，所以虚心求教，并且从平凡的事情上找寻大道理。这些对你非常有帮助，发现学习的乐趣，你的进步会非常神速!",
      "语言是你最擅长使用的工具，沟通对你来说也是不可或缺的能力。以学习力来看，向来讲究语言技术的你，会用各种方法“问”“说”“聊”来寻找心中的解答，属于举一反三的智慧学士派，唯一缺点是容易低估问题的难度，花在学习基础和解决事情方法上的时间比较少，而是把注意重心都放在了表面的聪明上，有时会不小心忽视真正的大智慧哦!所以要记得从基础做起哦!",
      "对于找出问题关键，你可以说是个中好手。对于环境适应能力相当好。不过有时候生存之道是来自生活经验的积累，多变的你，不喜欢艰深的道理，这样就会缺少很多学习的乐趣。知识能开阔人的眼界，重点在于如何能让自己由学习而变得更有深度。增加定力是眼前最重要的努力课题。",
      "你头脑相对于别人可能有一些迟钝，反应也没别人敏捷，所以在任何方面都不可以懒哦。一个人的成功也不是一定完全取决于智慧能力的，勤能补拙嘛。勤奋一些，你会找到属于你自己的方向的。。",
      "脚踏实地、稳扎稳打是你的生活哲学，苦读加上不断温习，让你学习来的知识永远不会忘记。在大家眼中你也是个好学努力的乖孩子，不过你要注意的是，不要一味埋头学习苦读。而是要把学到的知识活用，以及尽可能多的与别人互动，因为这样能让你得到更多的意想不到的智慧。只要想通这点，你旧能成为站在颠峰的人，而非只有理论的学者。"
    ],
    index: 0,
    dateY: 2020,
    xq: ""
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
    var xqtxt = "";
    if (pos == 0) {
      xqtxt = "50"
    } else if (pos == 1) {
      xqtxt = "100"
    }else if (pos == 2) {
      xqtxt = "75"
    }else if (pos == 3) {
      xqtxt = "25"
    }else if (pos == 3) {
      xqtxt = "45"
    }else{
      xqtxt = "60"
    }
    this.setData({
      index: pos,
      dateY: Y,
      xq: xqtxt
    })
  }
})