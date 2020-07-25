// pages/result/index.js
Page({
  data: {
    dateY: 0,
    list:[
      "有0个人喜欢你，在感情上不会有什么惊喜发生，你只能默默等待，或许你还没成为更好的自己，你的魅力不足以吸引他人对你的注意，建议你更加努力，从各方面来提升自己，注重形象认真学习，尝试着自律自爱，让自己变成更值得被人喜欢的人。",
      "喜欢你的人数量应该不会超过两个，或许很多时候你接受不了自己的平庸，甚至活在幻想的世界中，认为自己也是值得被爱的，是优秀的，有时候显得很自恋，想对你说的是，你需要面对的是真实的自我，认清自己才能找到可提升的空间，才会变得更有魅力。",
      "喜欢你的人数量应该在3~5之间，或许你自己感觉不到别人对你的倾慕，那是因为你不够自信，有时候你的想法很单纯，总觉得闪闪发光的人才值得被爱，而自己不是那样的人，其实只是你没看到自身的闪光点，相信只要你能提起自信心，未来喜欢你的人会更多。",
      "喜欢你的人数量应该在4~6之间，或许你自己感觉不到别人对你的倾慕，那是因为你不够自信，有时候你的想法很单纯，总觉得闪闪发光的人才值得被爱，而自己不是那样的人，其实只是你没看到自身的闪光点，相信只要你能提起自信心，未来喜欢你的人会更多。"
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