// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list:[
      "你的个性从遗传基因里就继承了被动这种特性，基因遗传这种特性，确实是很难改变的，所以才会有“江山易改，本性难移”这句话。而且你一来不是有压力就有动力的人，二来你真的比较满足现状，就很不喜欢与人在物质上攀比，至于恋爱，婚姻，你也是随缘的心态，你就是这样一个你，不准备改变，也没有想过要为爱执着的追求，主动这个词在你的人生字典里基本上能忽略不计了。当然也觉得缘分很重要，但是生活要想过得更好，主动性还是有必要提升的。",
      "你本性里确实不是喜欢争强好胜的，但是属于自己应得的，你还是会保护好，不轻易让别人捷足先登了。因为本性就是较被动的，所以遇到一点不顺，一点挫折，一点委屈，一点因为这样那样原因聚集起来的主动就会受到冲击而烟消雾散，甚至干脆当起了乌龟，躲在自己的壳里什么也不管不顾不理睬了。认为你太易受到外界的影响，这一点是你很有必要改变的，活着不是给别人看，是为自己的快乐而活。只有坚定一点，你的被动才能慢慢转变为主动的。",
      "你可能表面上给人感觉是一个享受慢生活，大方又大度，有点随遇而安的人。但其实，你有梦想，也勇于追求，只不过你不喜欢搞得大张旗鼓，然后也不是一个特别固执的人，如果在实现梦想的过程中，发现确实有不能逾越的阻力，你会理性的放弃，不会继续，就算有人督促你继续，你也会笑着走开，这可能就会给人一种被动的假象。你确实不会在小事上斤斤计较，经常退一步海阔天空，但认为你是一个比较主动的人，只是有选择，没有表现的太明显，太突出。",
      "你在生活中，职场上应该都是给人印象比较深刻的一个人。你知道自己喜欢什么，想要什么，会用自己的优势去主动出击的争取获得，就算这次没有实现，你也不会气馁，会重新做好准备，主动创造机会去重新争取。你真的很不喜欢被动的等待安排，这会让你焦躁，反而没有安全感，你有什么想法都会主动说出来，有什么想要的就会主动去实现。很欣赏你的主动，在这个时代，主动才能把握住先机，相信以你的主动，能抓住职场上最好的机会，赢得最多的筹码哦!",
      "你本性里确实不是喜欢争强好胜的，但是属于自己应得的，你还是会保护好，不轻易让别人捷足先登了。因为本性就是较被动的，所以遇到一点不顺，一点挫折，一点委屈，一点因为这样那样原因聚集起来的主动就会受到冲击而烟消雾散，甚至干脆当起了乌龟，躲在自己的壳里什么也不管不顾不理睬了。认为你太易受到外界的影响，这一点是你很有必要改变的，活着不是给别人看，是为自己的快乐而活。只有坚定一点，你的被动才能慢慢转变为主动的。"
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