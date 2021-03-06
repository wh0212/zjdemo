// pages/result/index.js
Page({
  data: {
    list:[
      "婚后你会过着简单幸福的生活，虽然不算很精致，但每一天都很充实，有很多事情需要你忙碌，婚姻也需要你认真去经营，虽然始终不能大富大贵，但每一天都过得很惬意，内心很踏实，非常运势网希望你能珍惜自己拥有的小幸福。认真经营好每一天，维护好稳定而简单的婚姻生活。",
      "婚后，你和另一半好似一对欢喜冤家，吵吵闹闹，家庭氛围挺紧张的，但床头吵架床尾和，二人没有实质性的矛盾，只是双方脾气都比较急躁，始终没能学会平静的沟通，吵架变成了你们沟通的方式。非常运势网建议你学着管理自己的情绪，感情再好，每天都在吵架，最后也不会有什么好结果。",
      "婚后你的生活外表光鲜，其中的心酸只有自己才懂，周遭的人都很羡慕你，认为你和另一半感情和睦，生活条件也比较优越，家庭温暖又幸福，实际上要维持这份幸福，你需要付出挺大的代价。非常运势网希望有一天你能放下虚荣心，追逐自己真正想要的，不要为了赢得别人的羡慕，忍气吞声。",
      "婚后你的生活很励志，你和另一半共同为了家庭财富而奋斗，日子一天比一天好，但两人都要付出挺大的代价，可能会牺牲简单美好的相处时光，也可能在育儿方面双方做的都不到位，不过所有事情都是有得必有失的，权衡其中的利弊在做出自己的选择，非常运势网相信你能抵达自己期待的目标。。",
      "你的性格温和柔软，有大局意识，婚后在婆婆眼里是个识大体的媳妇，两人相处得异常融洽，简直就是婆媳关系的模范代表。可是这种良好的婆媳关系令你看不清自己的位置，总是主动介入婆婆与其他人的争执，从而给你带来不少无妄之灾。假如想在婚后能够过得安定幸福，非常运势测试网提议你只要与婆婆打好关系就好了，不要过问太多不属于自己管的事情，否则牵扯太深不仅让问题得不到解决，还会令婆婆对你留下埋怨。",
      "性格豪爽的你与人相处时不太懂得顾及别人的感受，不加修饰的言词很容易得罪人而不自知。在婚后跟婆婆接触的时间里，直来直往的你经常在言语上让婆婆觉得不快，彼此之间很容易引发出摩擦，导致婆媳关系每况愈下。若想成为一个婆婆喜爱的媳妇，非常运势测试网提议你学会控制情绪和察言观色的能力，与婆婆相处时要注意谨言慎行，不要忘记自己的辈分。只要你坚持用最理想的样子对待婆婆，你们的关系将越来越好。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '星座测婚后生活',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/hyindex/index?from=sharebuttonabc&otherkey=othervalue&id=9', // ?后面的参数会在转发页面打开时传入onLoad方法
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