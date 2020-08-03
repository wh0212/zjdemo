// pages/result/index.js
Page({
  data: {
    list:[
      "想让老板欣赏你，还是别想歪点子了，用业绩说话才最管用。提升工作效率。认真做事，脚踏实地，勤奋踏实。不要投机取巧。一心想着如何把工作做得更出色，培养自己的专业精神，在老板眼中，就会成为值得被提携的对象。建议你不要耍小聪明，全心全意做事。用实力去证明自己。",
      "在与同事相处的时候，展现自己的高情商，利用情商帮助上司解决棘手的问题。搞定职场人脉关系。跟所有人和谐相处。如果有可能的话，建议你尽可能主动争取职场社交的机会，在，合作谈判中展现自己的好口才，促成谈判，协调职场氛围，便能轻松获得老板的欣赏。",
      "想让老板欣赏你，还是别想歪点子了，用业绩说话才最管用。提升工作效率。认真做事，脚踏实地，勤奋踏实。不要投机取巧。一心想着如何把工作做得更出色，培养自己的专业精神，在老板眼中，就会成为值得被提携的对象。建议你不要耍小聪明，全心全意做事。用实力去证明自己。",
      "在与同事相处的时候，展现自己的高情商，利用情商帮助上司解决棘手的问题。搞定职场人脉关系。跟所有人和谐相处。如果有可能的话，建议你尽可能主动争取职场社交的机会，在，合作谈判中展现自己的好口才，促成谈判，协调职场氛围，便能轻松获得老板的欣赏。"
    ],
    index:0,
    dateY:2020
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '怎么让老板欣赏你',
      desc: "来吧，展示，专业的数据，准到爆的测评，等你来！",
      path: '/pages/syindex/index?from=sharebuttonabc&otherkey=othervalue&id=52', // ?后面的参数会在转发页面打开时传入onLoad方法
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