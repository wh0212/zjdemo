// pages/result/index.js
Page({
  data: {
    list:[
      "你从小应该是一个比较喜欢看书的孩子，又或者可以说你对背课本很擅长，记性好是一方面，其实还有一个方面就是你对文字的理解很强，可以说总是能用比较少的时间，就能领悟文字里所要表达的表面的和深层的含义。你可能擅长写作，也可能不是很喜欢写作，但是文字确实是你的天赋，就算现在你不喜欢，只要找准了点，你很快就能入行。认为你的文字天赋，完全可以用到工作上来，只要你用点心，就会发现这种天赋能够带给你很神奇的魔力哦!",
      "你一直以来就不喜欢走寻常路，而你的想法常常都能令人眼前一亮，与众不同，当然是因为你与生俱来的创意天赋。你喜欢思考，也特别爱观察，能够发现别人没有发现的细节，想象力也是丰富的像满天的繁星一样，灵感迸发的超高频率，连你自己都可能想象不到。真的很羡慕你能拥有这样的创意天赋，这对工作的助力实在是太大了。你真的应该去做需要发挥创造力的工作，广告设计这类，就很适合你，做出来的东西不仅是高效率，更是高质量的。",
      "你很喜欢热闹，喜欢与人相处，喜欢交朋友，也喜欢去很多没去过的地方走一走，看一看，去发现新的美好，去认识新的朋友。你的天赋就是交际能力真的很强，不只是普通的自来熟，而是很快就能走进人的内心世界，看得透人心，以最佳的角度，和最快的速度，与人熟悉，友好，和交心起来。相信以你的这种天赋，不会孤独，生活中能交到朋友，工作中更是能将这种天赋发挥到极致，可以去演讲，也可以做销售，协调工作更是很简单的一件事，这个天赋运用好了，回报一定会很多。",
      "你的确是挺适合做医生的，你做事很果断，在关键的时刻，总能迅速作出判断，如果你是一个医生，不会让患者因为自己的犹豫受苦。只是，非常运势网认为如果你要做医生的话，还需要培养耐心和细心，虽然大部分时候你能做准确的判断，但一味求快，很可能会把事情搞砸，无论做任何事，希望你能用严谨的态度去对待自己需要处理的任务。",
      "你从小应该是一个比较喜欢看书的孩子，又或者可以说你对背课本很擅长，记性好是一方面，其实还有一个方面就是你对文字的理解很强，可以说总是能用比较少的时间，就能领悟文字里所要表达的表面的和深层的含义。你可能擅长写作，也可能不是很喜欢写作，但是文字确实是你的天赋，就算现在你不喜欢，只要找准了点，你很快就能入行。认为你的文字天赋，完全可以用到工作上来，只要你用点心，就会发现这种天赋能够带给你很神奇的魔力哦!",
      "你表面上可能是大大咧咧的，但其实你也有很柔软很细腻很细致的一面，而这一面其实得益于你的一个很重要的天赋，那就是数字。不是说你心算能力就一定很强，这毕竟有后天培养的成分在里面，而是你天生就对数字敏感，能够从数字中领悟到很多的逻辑，道理，可以从表面通过数字延伸到内里。你对数学的敏感天赋确实能够让你获得很多财富方面的增值，只要你在投资上多一份用心，相信你就能运用这个天赋获得多一份的回报，这可是很多人羡慕的天赋，你要好好利用哦!"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '星座测事业天赋',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/sy5index/index?from=sharebuttonabc&otherkey=othervalue&id=21', // ?后面的参数会在转发页面打开时传入onLoad方法
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