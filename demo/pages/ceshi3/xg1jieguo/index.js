// pages/ceshi/xg1jieguo/index.js
var app = getApp()
import shipin from "../../../ults/qudao.js"
Page({
  data: {
    act: true,
    list: [
      "你认为情侣之间吵架的时候最忌讳谈钱。谈钱伤感情，尤其是在吵架的时候，更不能提到与钱相关的任何话题，谈钱会让你觉得两人之间的距离不够亲密。非常运势网想对你说的是，金钱话题没你想象的那么敏感，敏感的是你自己的心。平时多和另一半聊聊实际话题，谈到金钱的时候，就不会那么敏感了。",
      "你认为情侣之间吵架的时候最不应该谈到的就是彼此过去曾经犯过的错误。一来是觉得陈芝麻烂谷子的事老拿出来说，很没意思，二来是认为吵架就要就事论事，把过去犯过的错也拿出来说，会激化矛盾。非常运势网支持你的观点，你在反对对方提旧事的同时，自己也要遵守规则，不要提对方曾经犯过的错。",
      "你认为情侣之间的争吵再严重也不能谈到分手，真的想分手，说出“分手”两个字就不可以再回头，没有勇气，大步流星的朝前走，就不要用“分手”两个字试探对方。动不动就说分手，确实很没品。但非常运势网仍然希望你能给伴侣一两次说气话的机会，人人都会做错事，也会说错话，别对对方要求太高。",
      "你认为情侣之间吵架的时候最不应该谈到的就是彼此过去曾经犯过的错误。一来是觉得陈芝麻烂谷子的事老拿出来说，很没意思，二来是认为吵架就要就事论事，把过去犯过的错也拿出来说，会激化矛盾。非常运势网支持你的观点，你在反对对方提旧事的同时，自己也要遵守规则，不要提对方曾经犯过的错。",
      "不管怎么吵，你都不会提到分手，如果某天你真的想和另一半分手，原因肯定不是因为总吵架。你可以包容对方的坏脾气，也能理解自己的坏情绪，非常运势网认为只有两人之间存在原则性的问题，且问题是不可消除的状况下，你才有可能会想到要分手，你对对方的感情是坚定的，遇到小困难，不会随意想到分手。",
      "你认为情侣之间吵架的时候最忌讳谈钱。谈钱伤感情，尤其是在吵架的时候，更不能提到与钱相关的任何话题，谈钱会让你觉得两人之间的距离不够亲密。非常运势网想对你说的是，金钱话题没你想象的那么敏感，敏感的是你自己的心。平时多和另一半聊聊实际话题，谈到金钱的时候，就不会那么敏感了。",
      "即使你和对方经常吵架，你也不会提分手。你对另一半的感情比较坚定，你相信两个相爱的人能走到一起是天注定的缘分，随便讲分手就浪费了这份缘分。非常运势网相信你可以凭借自己的坚强和努力把爱情经营的很美好。不管怎样，不可以用逃避的态度解决问题，经常吵架，要找到吵架的根源，消除问题，才能恩爱到底。。"
    ],
    index: 0
  },
  saveimg() {
    this.videoAdCreat()
  },
  search() {
    var that = this;
    if (app.globalData.gender == 1) {
      this.videoAd = tt.createRewardedVideoAd({
        adUnitId: 'ek5fh4pno97ttg77oh'
      })
      this.videoAd.onError((err) => {
        tt.showToast({
          title: this.videoAdErrHandle(err),
          icon: 'none'
        })
      })
      // 监听关闭
      this.videoAd.onClose((status) => {
        if (status && status.isEnded || status === undefined) {
          console.log('视频正常关闭 下发奖励')
          if (this.data.act) {
            tt.showToast({
              title: "正在检测",
              icon: "loading",
              success(res) {
                setTimeout(() => {
                  that.setData({
                    act: false
                  })
                }, 2000)

              },
              fail(res) {
                console.log(`showToast调用失败`);
              },
            });
          } else {
            console.log("保存图片")
            tt.canvasToTempFilePath({
              canvasId: 'shareCanvas',
              success: function (res) {
                console.log(res)
                tt.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: () => {
                    console.log("成")
                  }
                })
              },
              fail: function (err) {
                console.log(err)
              }
            })

          }
        } else {
          // 播放中途退出，进行提示
          tt.showToast({ title: '未完整观看视频不能获取奖励哦', icon: 'none' })
        }
      })
      this.videoAdCreat()
    } else {
      tt.showToast({
        title: "正在检测",
        icon: "loading",
        duration: 2000,
        success(res) {
          setTimeout(() => {
            tt.request({
              url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
              method: "post",
              data: {
                openid: tt.getStorageSync('cookies').openid,
                channel: "41",
                appletsName: "情侣吵架最忌讳什么",
                type: 1
              },
              success: (res) => {
                console.log(res, 222)
                that.setData({
                  act: false
                })
              }
            });
          }, 2000)

        },
        fail(res) {
          console.log(`showToast调用失败`);
        },
      });
    }
  },
  saveImagg() {
    tt.getSystemInfo({
      success: res => {
        console.log(res)

        this.setData({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        })
        console.log(this.data)
        var img = "../../../image/ceshi3.jpg"
        const ctx = tt.createCanvasContext('shareCanvas');

        ctx.setFillStyle('rgb(217, 223, 230)')
        ctx.fillRect(10, 180, this.data.screenWidth - 20, 1)

        ctx.drawImage(img, 10, 80, 90, 90);
        ctx.font = "20px Georgia";
        ctx.setFillStyle('rgba(0, 0, 0,1)')
        ctx.fillText("情侣吵架最忌讳什么", 110, 100);
        ctx.font = "16px Georgia";
        ctx.setFillStyle('rgba(113, 123, 255,1)')
        ctx.fillText("224.2w人在测", 110, 160);
        // 
        ctx.setFillStyle('rgb(217, 223, 230)')

        ctx.fillRect(115, 210, 150, 44)


        ctx.setFillStyle('rgba(0, 0, 0,1)')
        ctx.fillText("测试结果", 160, 240);

        ctx.setFillStyle('rgb(94, 93, 93)')
        ctx.setFontSize(16)
        // ctx.setTextAlign('center')
        //使文字换行显示
        const textHeightL = that.fillTextWrap(
          ctx,
          this.data.list[this.data.index],
          20,
          523 - (this.data.list[this.data.index]).length * 26 / 10,
          this.data.screenWidth - 60,
          36
        )
        ctx.stroke()
        ctx.draw()
        console.log(this.data)
      }

    })
  },
  onLoad: function (options) {
    tt.setNavigationBarTitle({
      title: "测评结果"
    });
    var pos = Math.round(Math.random() * (this.data.list.length - 1));

    if (app.globalData.gender == 0) {
      this.setData({
        act: false
      })
    } else {
      this.setData({
        index: pos,
        act: true
      })
    }
    shipin(41, '情侣吵架最忌讳什么')
    // this.saveImagg()
  },
  //保存至相册
  fillTextWrap(ctx, text, x, y, maxWidth, lineHeight) {
    // 设定默认最大宽度
    const systemInfo = wx.getSystemInfoSync()
    const deciveWidth = systemInfo.screenWidth
    // 默认参数
    maxWidth = maxWidth || deciveWidth
    lineHeight = lineHeight || 20
    // 校验参数
    if (
      typeof text !== 'string' ||
      typeof x !== 'number' ||
      typeof y !== 'number'
    ) {
      return
    }
    // 字符串分割为数组
    const arrText = text.split('')
    // 当前字符串及宽度
    let currentText = ''
    let currentWidth
    for (let letter of arrText) {
      currentText += letter
      currentWidth = ctx.measureText(currentText).width
      if (currentWidth > maxWidth) {
        ctx.fillText(currentText, x, y)
        currentText = ''
        y += lineHeight
      }
    }
    if (currentText) {
      ctx.fillText(currentText, x, y)
    }
  },
  roundRect(ctx, x, y, w, h, r, c = '#fff') {
    if (w < 2 * r) { r = w / 2; }
    if (h < 2 * r) { r = h / 2; }

    ctx.beginPath();
    ctx.fillStyle = c;

    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.lineTo(x + w, y + r);

    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
    ctx.lineTo(x + w, y + h - r);
    ctx.lineTo(x + w - r, y + h);

    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
    ctx.lineTo(x + r, y + h);
    ctx.lineTo(x, y + h - r);

    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x + r, y);

    ctx.fill();
    ctx.closePath();
  },
  videoAdCreat() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    this.videoAdLoad()
  },
  videoAdLoad() {
    // 用户触发广告后，显示激励视频广告
    if (this.videoAd) {
      this.videoAd.show().catch((err) => {
        this.videoAd.load()
          .then(() => this.videoAd.show())
          .catch(err => {
            tt.showToast({
              title: this.videoAdErrHandle(err),
              icon: 'none'
            })
          })
      })
    }
  },
  videoAdErrHandle(err) {
    console.log('视频加载失败', err)
    const errHandle = {
      1000: '后端接口调用失败',
      1001: '参数错误',
      1002: '广告单元无效',
      1003: '内部错误',
      1004: '无合适的广告',
      1005: '广告组件审核中',
      1006: '广告组件被驳回',
      1007: '广告组件被封禁',
      1008: '广告单元已关闭',
    }
    return errHandle[err.errCode] || '视频加载错误,重新加载页面试试吧'
  },
})