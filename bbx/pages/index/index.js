const app = getApp()
import Request from "../../ults/http.js"
Page({
  data: {
    list: [],
    swiperlist: [],
    navList: [{ name: '综合' }],
    recommend: [],
    navact: 0,
    page: 1,
    inptxt: "",
    modelAct: false,
    nav_left: 0, //横向滚动位置
    itemWdith: 62,
    delItem: false,
    searchAct: true,
    navItem: { name: '综合' },//默认类目
    bottomAct: false,
    clueData: [],
    pull: {
      isLoading: false,
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      pullText: '-上拉加载更多-'
    },
    top: -1,
    downTop: false,
    right: 635,
    bottom: 950
  },
  searchfun() {
    tt.navigateTo({
      url: '/pages/search/index'
    });
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
  refresh(e) {
    this.setData({
      'pull.isLoading': true,
      'pull.pullText': '正在加载',
      page: 1
    })
    setTimeout(() => {
      // list
      Request({
        url: '/article/search',
        method: 'GET',
        data: {
          title: '',
          page: 1,
          article_class_id: this.data.navItem.id
        }
      }).then((res) => {
        this.setData({
          list: res.data.data,
          page: 1,
          'pull.pullText': '刷新完成',
          inptxt: '',
          searchAct: true
        })
      })
    }, 900)
    setTimeout(() => {
      this.setData({
        'pull.isLoading': false,
      })
      console.log('+++++ 刷新完成 +++++')
    }, 1000)
  },
  toload(e) {
    this.setData({
      'push.isLoading': true,
      'push.pullText': '正在加载'
    })
    setTimeout(() => {
      this.data.page++;
      console.log(this.data.page, this.data.navItem.id, "page");
      if (!this.data.searchAct) {
        Request({
          url: '/article/search',
          method: 'GET',
          data: {
            title: this.data.inptxt,
            page: this.data.page,
            article_class_id: '' || this.data.navItem.id
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
              list: [...this.data.list,...res.data.data],
              clueData: data,
              'push.isLoading': false,
              'push.pullText': '- 上拉加载更多 -'
            })
          }
        })
      } else {
        Request({
          url: '/article/search',
          method: 'GET',
          data: {
            title: '',
            page: this.data.page,
            article_class_id: '' || this.data.navItem.id
          }
        }).then((res) => {
          console.log(res.data)
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
      }
      let data = this.data.clueData.concat([
        { createTime: '2019-11-12 16:33' }
      ])
      this.setData({
        clueData: data,
        'push.isLoading': false,
        'push.pullText': '- 到底了 -'
      })
      console.log('== 加载完成 ==')
    }, 2000)
  },
  // delete栏目 
  delItemfun(v) {
    var item = v.currentTarget.dataset.item;
    var navlist = [];
    this.data.navList.map((v, i) => {
      if (v.id == item.id) {
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/article/bindClass',
          method: 'GET',
          data: {
            openid: tt.getStorageSync('openid'),
            article_class_ids: [v.id]
          },
          success: (res) => {
            console.log(res.data, "dfjk")
          }
        });
        return
      } else {
        navlist.push(v)
      }
    })
    this.setData({
      navList: navlist,
      recommend: [...this.data.recommend, v.currentTarget.dataset.item]
    })
  },
  model_biinaji() {
    if (this.data.delItem) {
      this.setData({
        delItem: false
      })
    } else {
      this.setData({
        delItem: true
      })
    }
  },
  // 添加到 nav 
  navitempush(v) {
    this.setData({
      page: 1,
      bottomAct: false
    })
    var item = v.currentTarget.dataset.index;
    var recommend = [];
    var obj = {}
    if (this.data.delItem) {
      this.setData({
        modelAct: true
      })
      tt.showToast({
        title: '正在编辑',
        icon: 'fail',
        success: () => {
          this.setData({
            modelAct: true
          })
        }
      });
      this.setData({
        modelAct: true
      })
    } else {
      this.data.recommend.map((v, i) => {
        tt.setStorageSync('navId', item.id);
        if (v.id == item.id) {
          obj = v
          tt.request({
            url: 'https://tgadmin.clvtmcn.cn/api/article/bindClass',
            method: 'GET',
            data: {
              openid: tt.getStorageSync('openid'),
              article_class_ids: [v.id]
            },
            success: (res) => {
              console.log(res.data, "123123")
              this.setData({
                list: [],
                searchAct: true,
                inptxt: ""
              })
              Request({
                url: '/article/search',
                method: 'GET',
                data: {
                  title: '',
                  page: 1,
                  article_class_id: this.data.navItem.id
                }
              }).then((res) => {
                console.log(res.data, "推荐")
                if (res.data.data.length == 0) {
                  this.setData({
                    list: res.data.data,
                    searchAct: true,
                    inptxt: "",
                    'push.isLoading': false,
                    'push.pullText': ''
                  })
                } else {
                  this.setData({
                    list: res.data.data,
                    searchAct: true,
                    inptxt: "",
                    'push.isLoading': false,
                    'push.pullText': '- 上拉加载更多 -'
                  })
                }
              })
            }
          });
          return
        } else {
          recommend.push(v)
        }
      })
      this.setData({
        navList: [...this.data.navList, v.currentTarget.dataset.index],
        recommend: recommend,
        navItem: obj
      })
      this.setData({
        navact: this.data.navList.length - 1,
        nav_left: ((this.data.navList.length - 1) * this.data.itemWdith)
      })
    }
  },
  modelshow2() {
    this.setData({
      modelAct: true
    })
  },
  modelshow() {
    if (this.data.modelAct) {
      this.setData({
        modelAct: false,
        delItem: false
      })
    } else {
      this.setData({
        modelAct: true
      })
    }
    tt.setStorageSync('navlist', this.data.navList);
    tt.setStorageSync('remcod', this.data.recommend)
  },
  hidemodel() {
    this.setData({
      modelAct: false,
      delItem: false
    })
    tt.setStorageSync('navlist', this.data.navList);
    tt.setStorageSync('remcod', this.data.recommend)
  },
  // model选择类目
  navitemxz(v) {
    tt.setStorageSync('navId',v.currentTarget.dataset.item.id);
    this.setData({
      page: 1,
      inptxt: '',
      searchAct: true,
      bottomAct: false,
      top: 0,
      downTop: false
    })
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: '',
        page: 1,
        article_class_id: v.currentTarget.dataset.item.id
      }
    }).then((res) => {
      console.log(res.data, "model list")
      if (res.data.data.length == 0) {
        this.setData({
          list: res.data.data,
          modelAct: false,
          'push.isLoading': false,
          'push.pullText': '',
        })
      } else {
        this.setData({
          list: res.data.data,
          modelAct: false,
          'push.isLoading': false,
          'push.pullText': '~ 上拉加载更多 ~'
        })
      }
    })
    this.setData({
      navact: v.currentTarget.dataset.index,
      nav_left: (v.currentTarget.dataset.index * this.data.itemWdith),
      modelAct: false,
      navItem: v.currentTarget.dataset.item
    })
  },
  // nav-选择类目
  navitem(v) {
    console.log(v.currentTarget.dataset.item.id,"dsafdsafdfd")
    tt.setStorageSync('navId',v.currentTarget.dataset.item.id);
    this.setData({
      page: 1,
      inptxt: '',
      searchAct: true,
      bottomAct: false,
      top: 0,
      downTop: false
    })
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: '',
        page: 1,
        article_class_id: v.currentTarget.dataset.item.id
      }
    }).then((res) => {
      console.log(res.data, "导航选择")
      if (res.data.data.length == 0) {
        this.setData({
          list: res.data.data,
          modelAct: false,
          'push.isLoading': false,
          'push.pullText': '',
        })
      } else {
        this.setData({
          list: res.data.data,
          modelAct: false,
          'push.isLoading': false,
          'push.pullText': '- 上拉加载更多 -'
        })
      }
    })
    this.setData({
      navact: v.currentTarget.dataset.index,
      navItem: v.currentTarget.dataset.item
    })
  },
  detail(v) {
    var obj = v.currentTarget.dataset.item;
    app.globalData.item = obj;
    tt.navigateTo({
      url: `/pages/detail/index?itemId=${obj.id}`
    });
  },
  onLoad: function (options) {
    console.log(options, "dfdfdfd")
    this.setData({
      openid: options.openid
    })
    // nav
    Request({
      url: '/article/articelClass',
      method: 'GET'
    }).then((res) => {
      res.data.all.unshift({
        name: '综合'
      })
      this.setData({
        navList: res.data.all,
        recommend: res.data.hot
      })
    })

    // list
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: '',
        page: this.data.page,
        article_class_id: ''
      }
    }).then((res) => {
      this.setData({
        list: res.data.data
      })
    })
    var that = this;
    var obj = tt.createSelectorQuery();
    obj.selectAll('.nav_item').boundingClientRect(function (rect) {
      that.setData({
        itemWdith: rect[0].width
      })
    })
    obj.exec();
    var navlist = tt.getStorageSync('navlist');
    var remcod = tt.getStorageSync('remcod');
    if (navlist && remcod) {
      this.setData({
        navList: navlist,
        recommend: remcod
      })
    }
  },
  onShow() {
    // list
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: '',
        page: this.data.page,
        article_class_id: tt.getStorageSync('navId')
      }
    }).then((res) => {
      this.setData({
        list: [...this.data.list,...res.data.data]
      })
    })
  },
  onHide() {
    tt.setStorageSync('navlist', this.data.navList);
    tt.setStorageSync('remcod', this.data.recommend)
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: "资讯百宝箱",
      desc: "资讯百宝箱，延伸你的视野！",
      path: `/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=资讯百宝箱`,
      // imageUrl: '',
      templateId: '4csdk0ph0k62j48etv',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
})
