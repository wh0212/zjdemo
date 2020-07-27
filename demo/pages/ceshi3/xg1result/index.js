// pages/ceshi/xg1result/index.js
Page({
  data: {
    index: 0,
    list: [
      {
        title: "刚恋爱的时候，你会刻意隐瞒自己的某方面缺点吗？",
        timu: [
          "A.会", "B.不会"
        ]
      },
      {
        title: "你对过去每一次失恋的情景都记忆犹新吗？",
        timu: [
          "A.是", "B.不是"
        ]
      },
      {
        title: "刚爱的时候，你很注意自己的形象，恋爱了一阵后，就没那么注意了吗？",
        timu: [
          "A.是", "B.不是"
        ]
      },
      {
        title: "对你来说，恋人的颜值比才华更重要吗？",
        timu: [
          "A.是", "B.不是"
        ]
      },
      {
        title: "你并不善于表达自己内心的感情吗？",
        timu: [
          "A.是的", "B.不是"
        ]
      }
    ],
    tumu: null
  },
  deltimu() {
    this.setData({
      index: this.data.index -= 1
    })
  },
  addtimu(v) {

    this.setData({
      tumu: v.currentTarget.dataset.index
    })
    console.log(this.data.index)
    if (this.data.index == this.data.list.length - 1) {
      tt.showToast({
        title: '正在测试', // 内容
        icon: 'loading',
        success: (res) => {
          tt.navigateTo({
            url: '/pages/ceshi3/xg1jieguo/index' 
          });
        }
      });


    } else {
      setTimeout(() => {
        this.setData({
          index: this.data.index += 1,
          tumu: null
        })
      }, 500)
    }

  },
  onLoad: function (options) {
    tt.setNavigationBarTitle({
      title: "测试"
    });
  },
  onUnload: function () {
    tt.hideToast();
  }
})