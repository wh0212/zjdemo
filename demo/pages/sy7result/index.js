// pages/result/index.js
Page({
  data: {
    list: [
      "你朴实内敛，不爱与人争斗，平和的性子令你在职场里安守本分，尽心辅助领导工作。由于你在领导心目中的存在感较低，因此不管多么辛苦劳累，你都无法得到领导的另眼相看，被领导赏识的概率有点低。倘若你不愿意看到后辈们纷纷上位你还在原地踏步的局面，鼓励你多在领导面前争取表现，让对方看到你的业绩和实力。你要记住：就算良驹也要遇到伯乐才有所作为，缺乏领导赏识将让你的职场之路走得异常艰辛。",
      "你有出众的才华和踏实的个性，在职场里默默耕耘却从不邀功，深得领导们的欢心。虽然表面上来看你被领导赏识的概率很高，但是功高盖主的锋芒令你很容易引起领导的忌惮，从而在关键时候给你下绊子。假如不希望错失晋升的良机，建议你尽量与领导保持亲近的姿态，让对方看到你的忠诚和能力。当然，最重要的还是你必须懂得寻求明主，避免跟着鸡肚子小肠的领导，以免被他们的小心眼所害，阻碍你的发展前途。",
      "没有远大理想的你追求安逸稳定的生活，在平日的工作中表现得不思进取、懒散度日，看起来是一副难当大任的样子。在竞争激烈的职场中，缺乏亮丽成绩的你难以引起领导的注意，能够被领导赏识的概率十分之低。如果继续得过且过地度日，你的职业生涯将很快玩完。为了将来的生活不那么潦倒，认为你需要振作起来，用积极上进的姿态面对工作，争取给领导留下良好的印象，以求在职场上博得升职加薪的难得机会。",
      "机灵的你拥有强大的察言观色能力，别人从细小动作中透露出来的心思全被你一一看在眼里，无论与何人相处你都能应对自如。天赋异禀的交往能力令你在众多同事中脱颖而出，被领导赏识的概率很高，在职场上获得的机会也比同辈更多。可是强劲的风头给你带来不少的麻烦和嫉妒之情，心术不正的人甚至会把你抹黑成不择手段的小人，严重影响你的形象。不想被流言缠身，提议你在机会降临时，务必保持低调和缄默。",
      "没有远大理想的你追求安逸稳定的生活，在平日的工作中表现得不思进取、懒散度日，看起来是一副难当大任的样子。在竞争激烈的职场中，缺乏亮丽成绩的你难以引起领导的注意，能够被领导赏识的概率十分之低。如果继续得过且过地度日，你的职业生涯将很快玩完。为了将来的生活不那么潦倒，认为你需要振作起来，用积极上进的姿态面对工作，争取给领导留下良好的印象，以求在职场上博得升职加薪的难得机会。",
      "你有出众的才华和踏实的个性，在职场里默默耕耘却从不邀功，深得领导们的欢心。虽然表面上来看你被领导赏识的概率很高，但是功高盖主的锋芒令你很容易引起领导的忌惮，从而在关键时候给你下绊子。假如不希望错失晋升的良机，建议你尽量与领导保持亲近的姿态，让对方看到你的忠诚和能力。当然，最重要的还是你必须懂得寻求明主，避免跟着鸡肚子小肠的领导，以免被他们的小心眼所害，阻碍你的发展前途。"
    ],
    index: 0,
    dateY: 2020,
    xq: ""
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
    var xqtxt = "";
    if (pos == 0) {
      xqtxt = "35"
    } else if (pos == 1) {
      xqtxt = "65"
    }else if (pos == 2) {
      xqtxt = "5"
    }else if (pos == 3) {
      xqtxt = "95"
    }else if (pos == 4) {
      xqtxt = "25"
    }else if (pos == 5) {
      xqtxt = "75"
    }
    this.setData({
      index: pos,
      dateY: Y
    })
  }
})