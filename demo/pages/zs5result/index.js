
Page({
  data: {
    dateY: 0,
    list:[
      "你做事勤奋、踏实，学东西也快，因为智商很高，在工作中往往会有不俗的表现，但你情商较低，不善于展现自己除工作能力之外的魅力，很有可能给人一种“女强人”的感觉。所以，还是多一份生活上的浪漫，少一些工作上的严谨吧。",
      "在生活中，你也许会很受异性欢迎，因为你很懂得发挥自己的性别优势，懂得撒娇，懂得柔弱，会开玩笑。但是异性会愿意和你谈恋爱，不会想要和你结婚，所以，要想真正有个归宿，还得充实自己，提高智商。新一代女性，只有学会独立，才有资格依靠。",
      "你的情商和智商很平衡，既知道不应该把自己的感情表现得太赤裸裸，也懂得利用工作接近心爱的人。结婚之后，你应该会是一个既上得了厅堂，也下得了厨房的人，情商与智商的平衡，一定会让你的生活和谐幸福。",
      "你是一个很会把情商和智商结合在一起的人，因为你采取的接触方式很自然，既可以向他表现你的勤奋好学，也可以让他知道你的活泼可爱。你会希望凭借智商赢得一份可以养活自己的工作，但你更希望凭借情商找到一个可以依靠的人。",
      "在生活中，你也许会很受异性欢迎，因为你很懂得发挥自己的性别优势，懂得撒娇，懂得柔弱，会开玩笑。但是异性会愿意和你谈恋爱，不会想要和你结婚，所以，要想真正有个归宿，还得充实自己，提高智商。新一代女性，只有学会独立，才有资格依靠。"
    ],
    index:0
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '测试你的情商or智商匹配吗',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/zs5index/index?from=sharebuttonabc&otherkey=othervalue&id=35', // ?后面的参数会在转发页面打开时传入onLoad方法
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