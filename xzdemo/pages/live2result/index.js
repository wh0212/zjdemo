// pages/result/index.js
Page({
  data: {
    list:[
      "你今年会因为日常的社交而脱单，可能是在朋友的聚会上，可能是工作原因，结识了让自己感觉良好的人，没有谁向谁告白，两人就是自然而然的走到了一起，感情比较平淡。建议你不要对这段感情抱有太高的期待，尤其是别苛求浪漫，简简单单反而更容易走向幸福的结局。",
      "你今年会因为相亲而脱单，虽然只是抱着应付的心态去相亲，或者面对相亲这种事，完全没有什么期待，只是走走过场而已，但却意外的在相亲中遇到了感觉还不错的人，二人之间擦出火花，自己也感觉蛮意外的，而且有一点兴奋，建议你乘胜追击，主动把握缘分，能得到美满爱情。",
      "你今年会因为被追求而脱单，他人意外的追求让你感受到了自己的魅力，你终于相信原来自己也是值得被珍惜的，这份追求不仅让你脱单了，也让你提升了自信，相信你能在不经意间，莫名其妙的就收获一段美妙的恋情，享受爱情的同时会觉得自己很幸运，常常开心到忍不住要笑出声来？。",
      "你今年会因为主动追求某人而脱单，如果要脱单的话，就必须要表达自己对他人的喜欢，不能拖，不能等，被动是等不到爱情的。脱单的机会掌握在你自己手中，如果遇到了适合恋爱的人选，不一定要正式表白，建议你勇敢拉近二人之间的距离，顺利脱单，早日收获幸福。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '你会因为什么原因脱单',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/live2index/index?from=sharebuttonabc&otherkey=othervalue&id=55', // ?后面的参数会在转发页面打开时传入onLoad方法
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