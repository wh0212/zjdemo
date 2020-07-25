// pages/ceshi/xg1jieguo/index.js
Page({
  data: {
    act: true,
    list: [
      "你今年整体来说财运稳定，虽然没有什么收入惊喜，也基本上不用担心支出上的惊吓，也就是说你的支出都是意料之中必要的。至于股票投资上可能发生的一些损失，那基本上也在你的心理风险线以内，算不上破财，你只要注意不要追高杀跌，不要听信小道消息就能避开风险和陷阱。虽然今年破财的几率不大，但非常运势测试网认为你在赚钱上有必要多上点心，因为表面上的，直接，明显的机会不多，但是只要你用心发掘一下，就会发现一些适合你的赚钱机会。",
      "今年对你来说，算是种瓜得瓜种豆得豆的一年。在你熟悉的行业上越努力收入就越大，竞争当然会有，但只要你保持不急不躁的心态，你努力付出的就会得到相应的回报。财运贵人可能不会出现的太多，所以要想靠以小博大的投资获得较大收入不太可能，脚踏实地的做好自己的工作才是你能够赚到的靠谱来源。今年可能有朋友或熟人给你推荐兼职的工作或是投资项目，你一定要理性考虑好，是不是时间充裕，路程合适，不合适就不要勉强了。非常运势测试网相信你凡事稳重点，就能守住收入的。",
      "如果你的工作稳定，感情和谐，那今年你最要注意的就是身体健康方面了，而这也正是你今年最容易出现破财的地方。平时不要熬夜太多了，早睡早起，多吃点清淡的饭菜，不良的生活习惯最好能改就改了，如果你不注意身体，透支了健康，今年可能就要因此破财了，去趟医院就要用不少钱。另外，你也不要轻易和人因为一点小事就起争执，这不仅会伤了和气，还会破财。非常运势测试网认为你今年最好能锻炼好身体，谨言慎行，不要与人攀比，过好自己的生活。",
      "只要再熬一年时间里就能苦尽甘来了。可能当下你会觉得自己活得很辛苦，网购的时候也只是把东西一样一样的加进购物车，然后又默默的删掉，因为没有太多钱为物欲买单。等苦尽甘来后，你回头再想想今天的日子，会觉得这也是一种值得珍惜的体验。希望你能耐着性子熬到胜利之时。",
      "你是一个思想上特别谨慎的人，人生观，价值观也比较传统，你不喜欢冒险，因为你潜意识里过度担心风险会发生，你情愿一步一个脚印，按照既定的路线前进，也不会寻小路，抄近道，就算看到身边有人因为走近路，所以获得了更多的收获，你也觉得那只是运气好，而你对自己的运气没有太多自信，你还是相信脚踏实地来得靠谱。非常运势测试网认为你这辈子赚钱的道路只有一条，就是一份相对稳定的工作收入，除此之外，你一个机会不多，二来就是有机会，也会因为担心太多不敢抓住。如果对你自己的工作精益求精，赚钱能力也值得期待哦!",
      "还需要熬三年，你才能苦尽甘来。这意味着吃土的日子还得持续好一段时间，在这一千多天里，你还在认真计划呢，消费欲爆发的时候，要懂得克制自己，当然，如果你很难控制物欲，也可以用透支未来金钱的方法满足难以压抑的物欲。只是，不建议你过分放纵自己，认真理财是一种生活态度，和有没有钱无关、",
      "还需要熬五年，你才能苦尽甘来。在未来的很长一段时间里，你要不停的往前走，遇到什么困难都不要放弃自己，一旦放任自己颓废，你就会陷入堕落的状态，那样的话，就不止是熬五年了，可能还要熬很长时间。建议你认真安排时间，不要把时间浪费在无聊的事情上，珍惜时间，自然能早一点苦尽甘来。"
    ],
    index: 0,
    screenWidth: 0,
    screenHeight: 0

  },
  saveimg() {
    this.videoAdCreat()
  },
  search() {
    this.videoAdCreat()
  },
  // 
  saveImagg() {
    var that = this;
    tt.getSystemInfo({
      success: res => {
        console.log(res)

        this.setData({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        })

        var img = "../../../image/ceshi.jpg"
        const ctx = tt.createCanvasContext('shareCanvas');

        ctx.setFillStyle('rgb(217, 223, 230)')
        ctx.fillRect(10, 180, this.data.screenWidth - 20, 1)

        ctx.drawImage(img, 10, 80, 90, 90);
        ctx.font = "20px Georgia";
        ctx.setFillStyle('rgba(0, 0, 0,1)')
        ctx.fillText("未来事业测试", 110, 100);
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
    var that = this;
    tt.setNavigationBarTitle({
      title: "测评结果"
    });
    var pos = Math.round(Math.random() * (this.data.list.length - 1));
    this.setData({
      index: pos,
      act: true
    })
    this.saveImagg()
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
            // tt.showToast({
            //   title: this.videoAdErrHandle(err),
            //   icon: 'none'
            // })
          })
      })
    }
  },
  videoAdErrHandle(err) {
    console.log('视频加载失败',err)
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