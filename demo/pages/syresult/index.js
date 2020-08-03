// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list: [
      "你在事业上的成就可能并不是很高，但你可以成为圈内的领头羊。对很多人来说能取得这样的成就已经不错了，起码成为了领头羊，就能有更多的机会，也能赚更多的钱。身后还有一大票愿意追随你的人。非常运势网想对你说的是，把握事业前程，重点在于你肯为之付出多少的努力，付出和收获永远是成正比的。",
      "你会爬到行业的塔尖位置，你在圈内会很有名。崇拜你的同行非常多。很多人都把你当成榜样。在事业领域范围内，你是一个有威严的人，说什么别人就信什么。非常运势网希望你爬上行业塔尖后，还能保持一颗平常心。只有拥有平常心，才能更好的享受自己获得的一切成就。",
      "你在事业上可能没有什么比较明显的成就，但是努力为事业奋斗确实能让你赚到钱。事业是你获取财富的方式，甚至可以说是唯一且非常重要的方式，如果你能抓住这种方式提升自己的财富储备。非常运势网相信你可以通过事业改变自己的人生质量，甚至登上更高的社会阶层。",
      "今年事业大环境确实不太好，你应该已经遇到了很多计划赶不上的变化，就像职场上的瓶颈提前出现一样，你有些不知所措，不知如何是好，但时间不停往前走，生活要继续，工作还是要努力，可以说要想不让自己被后浪拍在沙滩上，今年必须要更努力。非常运势测试网认为你要在事业运不太好的今年，保持住一个平和的心态，因为你遇事如果越急躁，运势就对你越不利，你如果能保持住一个平和的心态，你还可能在逆境中寻得安稳，这对你今年来说可是很重要的事。",
      "你今年的运势从总体上来说本来就不太好，再加上受到疫情的冲击影响，也就更加的低迷了。非常运势测试网知道你一直都有努力，但是一来你努力的方向可能不太对，二来你所从事的行业受到了疫情的冲击很大，可以说整个行业的人员都感到压力山大，这其中还有不少人不得不换了工作，也都是为了生活。你今年就不要想着在事业上获得多大的成绩了，职场上最好低调一点，有时间就去充电学习，提升自己的职场竞争力，等过了今年的低迷期，事业运还是有望迎来上升的。",
      "你在事业方面缺乏上进心，每天上班都是浑浑噩噩的样子，平淡的职场生活令你看不到以后的前途。在非常运势测试网看来，这个月你的事业运依然波澜不惊，没有特别大的惊喜，但也不会过得特别糟糕。假如希望提升事业运，让未来的职业生涯过得轻松无忧，你从现在开始就要明确自己的事业目标，并调整心态，积极做出一番成绩。只要你不断付出辛勤的汗水，那么你的收获将出乎你的意料。",
      "你的能力实属一般，而且对前程的期待不切实际，不管在什么工作岗位上都感到不满和厌烦，难以做出令人眼前一亮的成绩。这个月你的事业运并不顺畅，甚至还会遇到一些倒霉事，令你背上沉重的压力。想要避开阻碍你事业发展的所有绊脚石，非常运势测试网提议你先认真分析个人的优缺点，然后找准适合自己的职业，以免在错误的行业中消耗青春和体力，从而错过了你有可能成功的大好机会。",
      "你会爬到行业的塔尖位置，你在圈内会很有名。崇拜你的同行非常多。很多人都把你当成榜样。在事业领域范围内，你是一个有威严的人，说什么别人就信什么。非常运势网希望你爬上行业塔尖后，还能保持一颗平常心。只有拥有平常心，才能更好的享受自己获得的一切成就。"
    ],
    index: 0,
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你的事业成就',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/syindex/index?from=sharebuttonabc&otherkey=othervalue&id=24', // ?后面的参数会在转发页面打开时传入onLoad方法
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
      index: pos,
      dateY: Y
    });
  }
})