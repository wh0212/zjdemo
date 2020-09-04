// pages/result/index.js
Page({
  data: {
    list:[
      "你有着清晰的逻辑思维和敏锐的观察力，不管遇到任何难题都能迅速找到解决方法，流露出的极高智商简直抛离了同龄人一大截。良好的天赋加上后天的努力，你在未来肯定能成为人中之龙。可是拥有高智商的你却没有同等级别的情商，微弱的社交能力令你难以协调人际关系，就算被人在背后捅刀也不知道。如果希望能够一直保持成功的态势，非常运势测试网建议你正视自身的弱点，设法提升你的情商，成就更完美的自己。",
      "你的见识浅薄、生活圈子狭小，与社会潮流有着严重的脱节，别人所说的很多东西你都表现出一头雾水，让人觉得你的智商较低，不屑跟你有所交流。倘若长期处于这种不利的状态，你的智商在未来将变得越来越低，还会活得异常艰难。若想变得更加聪明厉害，非常运势测试网建议你抱着主动学习的态度，把自己不明白的事情弄清楚为止。还有，你要把生活范围不断扩大，多认识不同的人和事，用丰富的人生经验武装头脑。",
      "算不上勤奋的你做事总是想着走捷径，凭着一点小聪明把复杂的事情简单化，在别人看来似乎有着很高的智商。但实际上你缺乏远见，做决定时不懂考虑未来的发展趋势，赚了眼前利益却丢了进步空间，综合来看智商水平只能算中上。若想在未来的人生经历中能够发挥得更好，非常运势测试网希望你不要害怕吃苦和吃亏，始终脚踏实地的做好自己的本分。只要把所有的智商都用在提升个人能力，你以后的日子将会越来越好。",
      "你的智商有120分，已经超过了大多数人，但能不能利用智商改变自己的人生，成为人上人，就看你愿不愿意开发自己的智商潜能了。如果你只是把智商用在游戏，娱乐方面，那上天白白给你120分的智商了。非常运势网建议你多给自己学习的机会，多学一点东西，不仅能利用自己的智商，还能让自己的生活更为充实。",
      "你有着清晰的逻辑思维和敏锐的观察力，不管遇到任何难题都能迅速找到解决方法，流露出的极高智商简直抛离了同龄人一大截。良好的天赋加上后天的努力，你在未来肯定能成为人中之龙。可是拥有高智商的你却没有同等级别的情商，微弱的社交能力令你难以协调人际关系，就算被人在背后捅刀也不知道。如果希望能够一直保持成功的态势，非常运势测试网建议你正视自身的弱点，设法提升你的情商，成就更完美的自己。",
      "你的智商有140分，是典型的高智商，你很聪明，学东西的速度超快，但如果在现实生活中，只是把聪明用到旁门左道上，可能并没能好好的利用你的智商，甚至可以说有浪费智商的嫌疑，如果你能找到自己最喜欢的事情并认真去钻研，非常运势网相信你一定能在该行业中创造出令人惊艳的成就。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你的智商水平',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/zsindex/index?from=sharebuttonabc&otherkey=othervalue&id=38', // ?后面的参数会在转发页面打开时传入onLoad方法
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