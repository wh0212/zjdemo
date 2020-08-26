const app = getApp()
import Request from "../../ults/http.js"
Page({
  data: {
    list: [],
    navList: [
      {
        name: '综合'
      }
    ],
    recommend: [],
    navact: 0,
    page: 1,
    inptxt: "",
    modelAct: false,
    nav_left: 0, //横向滚动位置
    itemWdith: 62,
    delItem: false,
    searchAct: true,
    navItem: {//默认类目Object
      name: '综合'
    },
    bottomAct: false,
    clueData: [
      { createTime: '2019-11-12 16:33' },
      { createTime: '2019-11-12 14:55' }
    ],
    pull: {
      isLoading: false,
      loading: '../../image/common/pull_refresh.gif',
      pullText: '正在加载'
    },
    push: {
      isLoading: false,
      loading: '../../image/common/pull_refresh.gif',
      pullText: '-上拉加载更多-'
    },
  },
  refresh(e) {
    console.log('刷新', e)
    this.setData({
      'pull.isLoading': true,
      'pull.loading': '../../image/common/pull_refresh.gif',
      'pull.pullText': '正在加载',
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
        console.log(res.data)
        res.data.data.map((v, i) => {
          // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
          v.detail = v.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"')
        })
        this.setData({
          list: res.data.data,
          page: 1,
          'pull.loading': '../../image/common/finish.png',
          'pull.pullText': '刷新完成',
          inptxt: '',
          searchAct: true
        })
      })
    }, 1000)
    setTimeout(() => {
      this.setData({
        'pull.isLoading': false,
      })
      console.log('+++++ 刷新完成 +++++')
    }, 1000)
  },
  toload(e) {
    console.log('加载', e),
      this.setData({
        'push.isLoading': true,
        'push.pullText': '正在加载',
        'push.loading': '../../image/common/pull_refresh.gif',
      })
    setTimeout(() => {
      if (!this.data.bottomAct) {
        this.data.page++;
        console.log(this.data.page, this.data.navItem.id);
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
            console.log(res.data)
            if (res.data.data.length == 0) {
              this.setData({
                bottomAct: true,
                'push.isLoading': false,
                'push.pullText': '- 到底了 -',
                'push.loading': '../../image/common/finish.png',
              })
            } else {
              res.data.data.map((v, i) => {
                // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
                v.detail = v.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"')
              })
              this.setData({
                list: [...this.data.list, ...res.data.data],
                clueData: data,
                'push.isLoading': false,
                'push.pullText': '- 上拉加载更多 -',
                'push.loading': '../../image/common/finish.png',
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
                'push.pullText': '- 到底了 -',
                'push.loading': '../../image/common/finish.png',
              })
            } else {
              res.data.data.map((v, i) => {
                // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
                v.detail = v.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"')
              })
              this.setData({
                list: [...this.data.list, ...res.data.data],
                clueData: data,
                'push.isLoading': false,
                'push.pullText': '- 上拉加载更多 -',
                'push.loading': '../../image/common/finish.png',
              })
            }
          })
        }
      }
      let data = this.data.clueData.concat([
        { createTime: '2019-11-12 16:33' },
        { createTime: '2019-11-12 14:55' },
      ])
      this.setData({
        clueData: data,
        'push.isLoading': false,
        'push.pullText': '- 到底了 -',
        'push.loading': '../../image/common/finish.png',
      })
      console.log('===== 加载完成 =====')
    }, 2000)

  },
  // 删除我的栏目到推荐栏目
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
            console.log(res.data)
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
        title: '请先完成类目编辑',
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
                this.setData({
                  list: res.data.data,
                  searchAct: true,
                  inptxt: ""
                })
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
  // 搜索框input
  inpchange(v) {
    this.setData({
      page: 1
    })
    if (v.detail.value == "") {
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
          searchAct: true,
          inptxt: ""
        })
      })
    }
    this.setData({
      inptxt: v.detail.value
    })
  },
  // 取消搜索
  nosearch() {
    this.setData({
      page: 1,
      bottomAct: false
    })
    Request({
      url: '/article/search',
      method: 'GET',
      data: {
        title: '',
        page: this.data.page,
        article_class_id: this.data.navItem.id
      }
    }).then((res) => {
      console.log(res.data, "search")
      this.setData({
        list: res.data.data,
        searchAct: true,
        inptxt: ""
      })
    })
  },
  // 搜索
  search() {
    this.setData({
      page: 1,
      bottomAct: false
    })
    if (this.data.inptxt) {
      tt.request({
        url: 'https://tgadmin.clvtmcn.cn/api/safety/safetyIsContent',
        method: 'post',
        data: {
          content: this.data.inptxt
        },
        success: (res) => {
          console.log(res.data, "ddd")
          if (res.data.prob == 1) {
            tt.showToast({
              title: '出现违规字',
              icon: 'fail',
              success: (res) => {
                return
              }
            });
          } else {
            Request({
              url: '/article/search',
              method: 'GET',
              data: {
                title: this.data.inptxt,
                page: 1,
                article_class_id: this.data.navItem.id
              }
            }).then((res) => {
              console.log(res.data, "search")
              this.setData({
                list: res.data.data,
                searchAct: false,
                modelAct: false
              })
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
  // 模态框选择
  navitemxz(v) {
    this.setData({
      page: 1,
      inptxt: '',
      searchAct: true,
      bottomAct: false
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
      console.log(res.data, "模态框list")
      this.setData({
        list: res.data.data,
        modelAct: false
      })
    })
    this.setData({
      navact: v.currentTarget.dataset.index,
      nav_left: (v.currentTarget.dataset.index * this.data.itemWdith),
      modelAct: false,
      navItem: v.currentTarget.dataset.item
    })
  },
  // 导航选择
  navitem(v) {
    this.setData({
      page: 1,
      inptxt: '',
      searchAct: true,
      bottomAct: false
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
      this.setData({
        list: res.data.data,
        modelAct: false
      })
    })
    this.setData({
      navact: v.currentTarget.dataset.index,
      navItem: v.currentTarget.dataset.item
    })
  },
  scroll(v) {
    console.log("上拉加载")
    if (!this.data.bottomAct) {
      this.data.page++;
      console.log(this.data.page, this.data.navItem.id);
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
          console.log(res.data)
          if (res.data.data.length == 0) {
            this.setData({
              bottomAct: true
            })
          } else {
            res.data.data.map((v, i) => {
              // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
              v.detail = v.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"')
            })
            this.setData({
              list: [...this.data.list, ...res.data.data]
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
              bottomAct: true
            })
          } else {
            res.data.data.map((v, i) => {
              // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
              v.detail = v.detail.replace(/\<img/gi, '<img style="width:100%;height:100%;object-fit: cover"')
            })
            this.setData({
              list: [...this.data.list, ...res.data.data]
            })
          }
        })
      }
    }

  },
  detail(v) {
    var obj = v.currentTarget.dataset.item;
    app.globalData.item = obj;
    tt.navigateTo({
      url: '/pages/detail/index'
    });
  },
  onLoad: function () {
    // 类目
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
      console.log(res.data)
      res.data.data.push({
          image: '/image/2.jpg',
          title: '藏族黑陶烧制技艺',
          type: '非物质文化遗产',
          date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
          detail: '<p>尼西黑陶<br />距离云南香格<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597655457852&di=5c3d2104f3698d6a5e1cb496fa145f08&imgtype=0&src=http%3A%2F%2Fwww.easck.com%2Fd%2Ffile%2Fp%2F2020%2F08-17%2F202008171106191584.jpg" alt="" />里拉县城30公里处有一个不起眼的小村落——汤堆村，隶属于迪庆州尼西乡，曾是茶马古道的必经之地。这里不仅保留有古朴的藏族民风，还传承着有2000多年历史的民间黑陶制作工艺。作为藏族文化的象征，黑陶制品在藏族聚居区被广泛地使用。在金沙江、澜沧江流域，考古学家曾发现2000多年前的黑陶器皿。2000多年来，藏族的民间艺人孜孜不倦地用双手传承着悠远的黑陶文化。 囊谦黑陶囊谦县位于青海最南部，属于玉树藏族自治州，曾是玉树历史上的政治经济文化中心，历史悠久。在囊谦，历史同样久远的还有囊谦藏黑陶，其制造工艺已有4000多年历史囊谦黑陶囊谦黑陶走进囊谦娘拉乡娘多村国家非物质文化遗产传承人白玛群加的家，随处可以看到形状各异的黑陶作品，宛如置身黑陶世界。囊谦藏黑陶仍保持着原始的手工制作工艺，过程非常复杂。原材料选用当地纯净细腻的红黏土和黏土石，经手工捣碎成末，然后经过筛选、拉坯、晾晒、修整、压光、绘纹等环节，再采用独特的“封罐熏烟渗碳”方法，经十余天烧制才能完成，成品具有“黑如碳、硬如瓷”的特点。每一件陶器器型差异与变化的掌控，全凭制陶艺人的感觉与经验。整个玉树康巴地区，只有白玛群加和他的师傅——80多岁的扎旺老人完全掌握黑陶的烧制技艺。相传唐代文成公主进藏远嫁松赞干布时途经玉树，将独特的制陶技艺传授给当地的藏族群众，使当地原始的制陶工艺更加完善，成为藏汉文化融合的结晶。在历史长河中，囊谦黑陶渗透在藏族的文化和宗教生活中，并在明清时演化出了康区藏式黑陶———藏黑陶。白玛群加在2001年拜黑陶艺人扎旺老人为师，潜心学习古老的黑陶手工技艺，并一直在家乡制作黑陶手工艺品。囊谦藏传黑陶以玉树州康巴藏族人文习俗、文化符号、宗教图腾等为素材，融合现代艺术表现手法，经古法烧制后呈现“黑如漆”的天然成色。在白玛群加众多作品中，将军壶无疑是他最得意的作品。</p>'
        })
      res.data.data.map((v, i) => {
        // v.detail = v.detail.replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;color:red">')
        v.detail = v.detail.replace(/\<img/ig, '<img style="width:100%;height:100%;object-fit: cover"')
      })
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
  onHide() {
    tt.setStorageSync('navlist', this.data.navList);
    tt.setStorageSync('remcod', this.data.recommend)
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: "资讯百宝箱",
      desc: "资讯百宝箱，延伸你的视野！",
      path: `/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=资讯百宝箱`, // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
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
