// pages/result/index.js
Page({
  data: {
    list:[
      "你们不仅互相倾心爱慕，还有着志同道合的人生目标，在共同前进的路上能够相互扶持、彼此鼓励，两个人共同创造出一个美好的未来。你们最终会成为同甘共苦的夫妻关系，携手走过人生的每一个阶段。可是在漫长的爱情经历中，共患难也许比共富贵更容易，生活条件的好转反而会给你们的关系带来危机。不想被利益纷争破坏你们的感情，你们最好尽早在财产分配方面达成共识，切勿让简单的小矛盾发展成不可解决的大冲突。",
      "你的思想顽固、为人悲观，对感情之事的看法较为消极负面，内心始终缺乏一种安全感。就算跟喜欢的人建立起一段稳定的恋爱关系，你也会因为相处过程中的种种磨合而感到不顺心，从而引发的争执将大大损害你们的爱情。随着各种矛盾的不断积累，你们最终成为充满仇恨的敌人，在不断的互相打击中消耗着各自的人生。不想出现最坏的局面，建议你学会反思自己在恋爱中的表现和想法，用积极阳光的心态处理好感情里的每一次纷争。",
      "你们的个性和兴趣都十分相似，一起相处时总是有着无穷无尽的话题，两人的感情始终保持着一定的热度。可是现实里的爱情除了内心的感受以外，还牵扯到不同人和事之间的复杂关系，你们未必能跟对方一辈子共同生活，但最终肯定能成为无话不谈的朋友。不过两性之间的纯洁友情并不容易被身边的人接受，假如你们最后仅仅把对方当成是难得的知己，那么提醒你们注意交往的距离，以免惹出不实的桃色绯闻，影响到各自的正常生活。",
      "你们对生活、对爱情都有着完全不同的理念，能够在一起全凭一时的冲动。当最初的激情褪去，你们之间的相处将变得困难重重，直到忍无可忍而分开，大家最终成为形同陌路的前任关系。假如你跟对方目前还有着深刻的依恋之情，认为你们应该及早认清存在于两人之间的问题，并尽早想办法解决掉盘桓在你们中间的麻烦。否则等到这段感情无可挽救的时候，你们就只能眼睁睁地看着曾经美好的爱情随风消逝，连一点念想都无法留下来。",
      "还没定性的你看不清楚未来的人生之路该怎么走，暂时没有打算考虑自己的终身大事，恋爱对你来说不过是排遣寂寞的一种手段罢了，心中对这段感情不抱多少期待。你只是单纯地享受恋爱的甜蜜幸福感，就算这段爱情没有结果你也不会感到遗憾。在以后的人生中，只有做好了成家的心理准备以后，你在恋爱时才会变得认真负责，逐渐懂得为两人的未来打算，这样你的感情才有机会走向圆满。",
      "你是一个随遇而安的人，在感情方面表现得较为被动，不习惯解释自己的想法和心情，和爱人之间仿佛始终有层难以跨越的墙，让你们的感情从而难以得到提升。在这段感情里，假如没有其他因素的干扰，你和爱人还有机会修成正果，但是两人之间只要有一丁点的矛盾，你和爱人最终将会分道扬镳。倘若你对这段感情付出了真心，建议你主动化解感情里的危机，不要等到时过境迁以后才感到后悔不已。"
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