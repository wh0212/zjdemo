// pages/ceshi/xg1result/index.js
Page({
  data: {
    index: 0,
    list: [
      {
        title: "你有一个小院子，会种果树吗？",
        timu: [
          "A.会", "B.不会"
        ]
      },
      {
        title: "你喜欢逛小商品市场吗？",
        timu: [
          "A.喜欢", "B.不喜欢"
        ]
      },
      {
        title: "你看到漂亮的水果，就会多买一点吗？",
        timu: [
          "A.不会", "B.会"
        ]
      },
      {
        title: "如果有机会去太空旅行，你一个人也愿意去吗？",
        timu: [
          "A.愿意", "B.不愿意"
        ]
      },
      {
        title: "你喜欢冰箱里放满牛奶饮料吗？",
        timu: [
          "A.喜欢", "B.不喜欢"
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
        icon:'loading',
        success: (res) => {
          tt.navigateTo({
            url: '/pages/ceshi2/xg1jieguo/index' // 指定页面的url
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