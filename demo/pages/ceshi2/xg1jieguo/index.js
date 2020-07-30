var app = getApp()
import shipin from "../../../ults/qudao.js"
Page({
  data: {
    act: true,
    list: [
      "你很善良，不是一个轻易麻烦别人的人。你对人对事要求不多，会努力做好分内的事，能靠自己能力去得到的，就自己努力，实在得不到的，你也不会太计较。你第一次与人见面，应该话不多，如果是自己应该做的，你就会做好，不是自己该管的事，你也不会多话，别人需要你帮忙的事，你能帮的不会推脱，不能帮的也会直言自己确实做不到。认为你给别人的第一印象应该就是老实很靠谱的，就算跟你第一次见面，也不用设防太多，会是一个让人愿意靠近，愿意了解更多，愿意去深交的朋友。",
      "你是一个心态比较平和的人，因为你凡事都很有自己的计划，也会想好应对方法，就算出现了计划之外的情况，你也不会表现的太急躁。你逢人就爱笑，笑的很有分寸，不会与人轻易多说自己的事，也不会轻易表达自己对人对事的一些看法。认为你给别人的第一印象可能就是有点圆滑，有点小心机，说话不会说的太满，也会有意顾及别人的感受，但是也不会轻易透露出自己的真实信息。这样的你，确实能更好的保护自己，只是也不容易让人信任，让人产生深交的感觉哦！",
      "你爱说爱笑，属于很容易跟人自来熟的类型。你心里面有什么想法，就会情不自禁直接说出来，因为对人没有防备心，所以就算跟第一次见面的人相处，也还是很轻松大方的表现，心里想什么也就说出来什么，虽然说话直来直往，但也不会轻易怼人的。当然有理由认为，你给别人的第一印象就是耿直好相处，有什么都可以跟你说一说，不用担心被引申成其他含义。你的好相处确实会让你更受欢迎，更容易交到朋友，但你交朋友也要谨慎一点，可不要轻易被别人利用了自己的好。",
      "你缺乏自信和勇气，在生活中只有得到别人的赞赏才会有安全感和存在感，因此常常习惯性地讨好身边的人，把自己的想法和需求都压制起来。尽管你自以为掩饰得很好，但其实很多时候旁人都能看出你的口不对心，并给你贴上表里不一的形象标签，对你都有着明显的戒备之心。如果想要在以后化解别人对你的防备和误解，鼓励你在人前大胆地表达真实的自我，降低别人对你的影响力，你的人生也能过得更自在。",
      "你的个性直率坦荡，说话做事都不喜欢拐弯抹角，让人一眼就能看穿你。在别人面前，丝毫不懂隐瞒的你与表里不一的形象完全搭不上边，只有一种独特的天真简单引起别人的怜爱。纯真的你虽然跟任何人都能相处得很好，但同时也很容易被用心险恶的小人利用，让你惹上各种麻烦。要想避开各种人际陷阱，提醒你特别留意交往的对象，尽量远离人品较差的人。同时也要学会收敛自己的心思，以免被人洞悉一切。",
      "你爱说爱笑，属于很容易跟人自来熟的类型。你心里面有什么想法，就会情不自禁直接说出来，因为对人没有防备心，所以就算跟第一次见面的人相处，也还是很轻松大方的表现，心里想什么也就说出来什么，虽然说话直来直往，但也不会轻易怼人的。当然有理由认为，你给别人的第一印象就是耿直好相处，有什么都可以跟你说一说，不用担心被引申成其他含义。你的好相处确实会让你更受欢迎，更容易交到朋友，但你交朋友也要谨慎一点，可不要轻易被别人利用了自己的好。",
      "性格软弱的你总是担心跟别人发生冲突，平素一般都会迁就身边的人。当内心不愿却又不敢拒绝别人请求的时候，你的行动往往会暴露出种种蛛丝马迹，让别人把你归类成一个表里不一的人，对你的看法也带上一定的偏见。若想在往后的人生中减少被人质疑的可能，认为你做好自己的本分就可以了，没必要事事都在乎别人的想法。对于别人不合理的请求你必须懂得委婉拒绝，否则就算你做了大家也会感到不高兴。"
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
                  tt.request({
                    url: 'https://tgadmin.clvtmcn.cn/api/login/adUnitInform',
                    method: "post",
                    data: {
                      openid: tt.getStorageSync('cookies').openid,
                      channel: "40",
                      appletsName: "你的第一印象",
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
            that.setData({
              act: false
            })
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
        var img = "../../../image/ceshi2.jpg"
        const ctx = tt.createCanvasContext('shareCanvas');

        ctx.setFillStyle('rgb(217, 223, 230)')
        ctx.fillRect(10, 180, this.data.screenWidth - 20, 1)

        ctx.drawImage(img, 10, 80, 90, 90);
        ctx.font = "20px Georgia";
        ctx.setFillStyle('rgba(0, 0, 0,1)')
        ctx.fillText("你给别人的第一印象", 110, 100);
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
    shipin(40,'你的第一印象')
    // this.saveImagg()
  },
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
  }
})