import Request from "../../ults/http.js"
var app = getApp();

Page({
  data: {
    page: 1,
    inptxt: "",
    list: [],
    searchAct: true,
    lishiAct: true,
    lishilist: [],
    pull: {
      isLoading: false,
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      pullText: ''
    },
    top: -1,
    downTop: false,
    right: 635,
    bottom: 950,
    clueData: []
  },
  lishiItme(v) {
    var lishim = this.data.lishilist;
    lishim.map((val, i) => {
      if (val == v.currentTarget.dataset.name) {
        lishim.splice(i, 1)
      }
    })
    lishim.unshift(v.currentTarget.dataset.name);
    tt.setStorageSync('lishi', lishim);
    this.setData({
      inptxt: v.currentTarget.dataset.name
    })
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: v.currentTarget.dataset.name,
        page: 1,
        article_class_id: ''
      }
    }).then((res) => {
      this.setData({
        list: res.data.data,
        searchAct: false,
        lishiAct: false
      })
    })
  },
  remove() {
    tt.removeStorageSync('lishi');
    this.setData({
      lishilist: []
    })
  },
  onDown(e) {
    this.setData({
      downTop: e.detail.onDown
    })
  },
  ontop() {
    this.setData({
      top: 0,
      right: 635,
      bottom: 950
    })
  },
  nosearch() {
    this.setData({
      list: [],
      searchAct: true,
      inptxt: "",
      lishiAct: true,
      lishilist: tt.getStorageSync('lishi') || [],
      downTop: false
    })
  },
  detail(v) {
    var obj = v.currentTarget.dataset.item;
    tt.navigateTo({
      url: `/pages/detail/index?itemId=${obj.id}`
    });
  },
  inpchange(v) {
    this.setData({
      page: 1
    })
    if (v.detail.value == "") {
      this.setData({
        list: [],
        lishiAct: true,
        searchAct: true,
        lishilist: tt.getStorageSync('lishi') || [],
        inptxt:""
      })
    } else {
      this.setData({
        inptxt: v.detail.value
      })
    }
  },
  // Search
  search() {
    this.setData({
      page: 1
    })
    if (this.data.inptxt) {
      tt.request({
        url: 'https://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.inptxt,
          appid:"tt99eeef5306d4c283"
        },
        success: (res) => {
          if (res.data.prob == 1) {
            tt.showToast({
              title: '出现违规字',
              icon: 'fail',
              success: (res) => {
                return
              }
            });
          } else {
            this.setData({
              searchAct: false,
              lishiAct: false
            })
            var lishim = this.data.lishilist;
            lishim.map((v, i) => {
              if (v == this.data.inptxt) {
                lishim.splice(i, 1)
              }
            })
            lishim.unshift(this.data.inptxt);
            tt.setStorageSync('lishi', lishim);
            Request({
              url: '/article/search',
              method: 'GET',
              data: {
                title: this.data.inptxt,
                page: 1,
                article_class_id: ''
              }
            }).then((res) => {
              if (res.data.data.length ==0) {
                this.setData({
                  list: res.data.data,
                  'push.isLoading': false,
                  'push.pullText': ''
                })
              } else {
                this.setData({
                  list: res.data.data,
                  'push.isLoading': false,
                  'push.pullText': '- 上拉加载更多 -'
                })
              }
            })
          }
        }
      });
    } else {
      tt.showToast({
        title: '请输入关键字',
        icon: 'fail'
      })
    }
  },
  onLoad: function (options) {
    this.setData({
      lishilist: tt.getStorageSync('lishi') || []
    })
  },
  toload(e) {
    this.setData({
      'push.isLoading': true,
      'push.pullText': '正在加载'
    })
    setTimeout(() => {
      this.data.page++;
      Request({
        url: '/article/search',
        method: 'GET',
        data: {
          title: this.data.inptxt,
          page: this.data.page,
          article_class_id: ''
        }
      }).then((res) => {
        if (res.data.data.length == 0) {
          this.setData({
            bottomAct: true,
            'push.isLoading': false,
            'push.pullText': '- 到底了 -'
          })
        } else {
          this.setData({
            list: [...this.data.list, ...res.data.data],
            clueData: data,
            'push.isLoading': false,
            'push.pullText': '- 上拉加载更多 -'
          })
        }
      })
      let data = this.data.clueData.concat([
        { createTime: '2019-11-12 16:33' }
      ])
      this.setData({
        clueData: data,
        'push.isLoading': false,
        'push.pullText': '- 到底了 -'
      })
    }, 2000)
  },
})