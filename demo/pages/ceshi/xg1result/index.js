// pages/ceshi/xg1result/index.js
Page({
  data: {
    index: 0,
    list: [
      {
        title: "父母很清楚你的工作内容吗？",
        timu: [
          "A.是的", "B.不是"
        ]
      },
      {
        title: "从来不在公开场合跟别人讨论自己的工作吗？",
        timu: [
          "A.是的", "B.没有"
        ]
      },
      {
        title: "你为了事业学过某项技能吗？",
        timu: [
          "A.是的", "B.没有"
        ]
      },
      {
        title: "你认为在工作中学到的东西比在学校中学到的更多吗？",
        timu: [
          "A.是的", "B.没有"
        ]
      },
      {
        title: "曾经跟上司顶过嘴吗？",
        timu: [
          "A.是的", "B.没有"
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
    if (this.data.index == this.data.list.length - 1) {
      tt.showToast({
        title: '正在测试',
        icon:'loading',
        success: (res) => {
          tt.navigateTo({
            url: '/pages/ceshi/xg1jieguo/index'
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
  }
})