Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    listLength: {
      type: Number,
      value: 0
    },
    pull: {
      type: Object,
      value: {}
    },
    push: {
      type: Object,
      value: {}
    },
    top: {
      type: Number,
      value: -1
    }
  },
  pageLifetimes: {
    show() { // 页面被展示
      this.setData({
        pull: this.properties.pull,
        push: this.properties.push,
      })
    },
  },
  data: {
    pull: {},
    push: {},
    slideStart: [],
    moveTime: 0,
    scrollt: 0,
    botm: false,
    top: -1
  },
  attached() {

  },
  methods: {
    /**开始滑动 */
    touchstart(e) {
      /**记录开始滑动的时间 */
      this.setData({
        slideStart: e.touches[0]
      })
    },
    /**滑动 */
    touchmove(e) {
      let moveTime = new Date().getTime(); // 当前时间
      if (moveTime - this.data.moveTime <= 2000) {
        return
      } else {
        this.setData({
          moveTime: moveTime
        })
      }
      let slideStart = this.data.slideStart;
      let slideMove = e.touches[0];
      let startX = slideStart.pageX;
      let startY = slideStart.pageY;
      let moveEndX = slideMove.pageX;
      let moveEndY = slideMove.pageY;
      let X = moveEndX - startX;
      let Y = moveEndY - startY;
      if (Math.abs(Y) > Math.abs(X) && Y > 0) { // 从上向下滑
        console.log("top 2 bottom");
        if (this.data.scrollt < 50) {
          this.pullRefresh()
        }
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) { // 从下向上滑
        console.log("bottom 2 top");
      }
    },
    //底部 
    binlower() {
      this.loadMore()
    },
    scrolla(e) {
      this.setData({
        scrollt: e.detail.scrollTop
      })
      if (e.detail.scrollTop > 200) {
        this.triggerEvent('onDown', { onDown: true })
      } else {
        this.triggerEvent('onDown', { onDown: false })
      }
    },
    /**下拉刷新 */
    pullRefresh(e) {
      this.triggerEvent('refresh', { refresh: true })
    },
    /**上拉加载更多 */
    loadMore(e) {
      this.triggerEvent('toload', { toload: true })  // 将toload通过参数的形式传递给父组件
    }
  }
})