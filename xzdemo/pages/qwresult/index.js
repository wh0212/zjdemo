// pages/result/index.js
Page({
  data: {
    list:[
      "你追求自由，但也懂得适当的约束自己，你有自己的人生目标，也有自己的做人底线，你相信实力才是最经得起时间考验的资本。你尊重别人的思想，也坚持自己的主见，最重要的是你懂得抓住机会，只要给你个舞台，你就敢于表现自己。认为你其实适合生活在当代，这个讲究民主，只要足够努力，就有可能抓住想要的机会，只要勇于表现自己，就可能实现理想的时代。这个时代在高速发展，竞争也日益激烈，你还应该更努力一点，才能不轻易被后浪赶上，更快实现梦想哦！",
      "你一直以来都是一个思想比较保守的人，因为太过保守，与这个开放的年代就有些格格不入，所以会觉得难以交到志同道合的朋友，难以找到三观一致的对象。你觉得不敢想的事，身边的很多人已经行动了，你觉得不敢做的事，身边的很多人已经是常态，因为太保守，很多感情上，工作上的机会，都让你轻易就错过了。认为你其实很适合生活在清朝，做人做事，过生活都比较要求中规中矩，别人会觉得很束缚，你觉得挺好，有一种规规矩矩的安全感。你虽然适合清朝，毕竟现在已经不是清朝了，思想上还是要学着放开一点更好哦！",
      "你应该是对艺术比较有天赋的人，只不过你具备的艺术天赋需要一定深度的文化基础，也需要得到更多人的支持与参与，才能发挥的更好。其实你比起现在的很多人来说，已经算是思想比较开放的，这一点尤其表现在穿衣打扮上，美的很有艺术的氛围，但你又容易受环境影响，大众不能接受你的审美，你就会压抑自己的美。认为你其实最适合生活在唐朝，这个封建经济繁荣，文化比较多元化，艺术氛围很好的时代。这样你就可以展现自己的美，让你的审美成为一种潮流，更能让自己的艺术天赋得到更好的发挥了。",
      "你是思想特别超前的一个人，从小就表现出想象力特别丰富，总能想到一些别人想不到的，也愿意去尝试一些大多数人都不敢尝试的新事物。因为你的天马行空，生活中很多人，很多时候都可能不能理解你的想法，如此一来，你就显得比较另类了。认为你应该更适合生活在未来的时代，到那个时候思想更开放，你的很多想法应该都能得到认可，在未来的时代里，你会活的更加自由，也能结交到更多志同道合的朋友，相信以你的思想，也能创造出更美好的生活。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '你适合生活在那个时代',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/qwindex/index?from=sharebuttonabc&otherkey=othervalue&id=56', // ?后面的参数会在转发页面打开时传入onLoad方法
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