// pages/result/index.js
Page({
  data: {
    list:[
      "你的投资运非常好，经常会遇到值得珍惜的投资机会，如果你还没能从投资中尝到甜头，那是因为你不是想可能过于保守，没有勇气尝试投资，只是如果你愿意发挥自己的投资才能，是有机会通过投资的方式赚到钱的。不过，要提示你的是，即便投资运良好，也不要过分相信直觉，在投资前，还是应该认真做一做财务状况调研工作。",
      "你的财富主要靠正财累积。有时候你可能觉得赚钱不那么容易，这种想法没错，成年人的世界中几乎没有“容易”二字，如果你能坚持下去，为了理想而奋斗，慢慢的累积财富，状况会越来越好，金钱不请自来。认为你只要耐心的把一件事做好，这件事就会给你带来巨大的财富。",
      "你的偏财运非常好，你总能因为各种原因获得偏财，这可能跟你的人气脱不了关系吧。你很会打理人际关系，所以人脉比较广，总会因此得到与财富相关的信息，利用这些信息便能得到偏财。希望你能坚持做一个善良乐观的人，保持品行端正也是维护偏财的一种方式，要相信好人有好报的道理。",
      "你可以靠理财的方式稳固财运。你是一个小心谨慎的人，你经得住诱惑的考验，不会乱花钱，懂得应该把钱花在刀刃上的道理。其实你有很强的财富嗅觉，只是你并不是很看重得失，脚踏实地的理财，自然会有好结果。如果你对理财感兴趣的话，建议你多学一些理财知识，这对你未来的财富状况有帮助。",
      "你是一个思想上特别谨慎的人，人生观，价值观也比较传统，你不喜欢冒险，因为你潜意识里过度担心风险会发生，你情愿一步一个脚印，按照既定的路线前进，也不会寻小路，抄近道，就算看到身边有人因为走近路，所以获得了更多的收获，你也觉得那只是运气好，而你对自己的运气没有太多自信，你还是相信脚踏实地来得靠谱。非常运势测试网认为你这辈子赚钱的道路只有一条，就是一份相对稳定的工作收入，除此之外，你一个机会不多，二来就是有机会，也会因为担心太多不敢抓住。如果对你自己的工作精益求精，赚钱能力也值得期待哦!",
      "你总的来说，还是一个稳重踏实的个性，在为人处事上有一套自己的原则，虽然不会轻易改变，但不是特别固执，只要对自己有利有益的事，你会接受，也会去尝试。在赚钱这件事上，你有自己的目标，有自己的计划，也会努力提升自己的专业技能，首先你当然会把自己的稳定收入做好，因为你专业技能比较强，又愿意赚更多钱，会有与你专业相关的其他赚钱途径找到你，而你自己也会有意关注。非常运势测试网认为你的财路不只一条，应该也会有两三条，如果够用心，这几条财路都会比较稳定。",
      "在下血本为自己的心头好买单的时候，你总会告诉自己有了它就满足了，不会再买其他东西。过不了几天却又忍不住种草别的物品。你的购物车永远是满满的，有时候也会想删掉一些东西，清理一下购物车，但删掉哪一样都觉得心疼，一咬牙，干脆全部清空，逼自己狂赚钱来还债。"
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