const app = getApp()

Page({
  data: {
    user: {} || tt.getStorageSync('userInfo'),
    kemu: [
      {
        title: '数',
        count: 0 || tt.getStorageSync('count').shucount,
        color: '#875aff'
      },
      {
        title: '英',
        count: 0 || tt.getStorageSync('count').yingcount,
        color: '#6196ff'
      },
      {
        title: '语',
        count: 0 || tt.getStorageSync('count').ccount,
        color: '#29bb98'
      }
    ]
  },
  ranking(v) {
    console.log(v.currentTarget.dataset.title);
    tt.navigateTo({
      url: '/pages/ranking/index?title='+v.currentTarget.dataset.title
    });
  },
  yingyu() {
    tt.navigateTo({
      url: '/pages/english/index'
    });
  },
  suanshu() {
    tt.navigateTo({
      url: '/pages/suanshu/index'
    });
  },
  chengyu() {
    tt.navigateTo({
      url: '/pages/yuwen/index'
    });
  },
  onShow() {
    this.setData({
      'kemu[0].count': tt.getStorageSync('count').shucount,
      'kemu[1].count': tt.getStorageSync('count').yingcount,
      'kemu[2].count': tt.getStorageSync('count').ccount
    })
  },
  onShareAppMessage(option) {
    // option.from === 'button'
    return {
      title: '知识星球大挑战',
      desc: "我通关啦！快来看看你能闯到哪",
      path: '/pages/index/index?from=sharebuttonabc&otherkey=othervalue&id=0', // ?后面的参数会在转发页面打开时传入onLoad方法
      // imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序icon
      templateId: '1beecc0ql9d238i7n0',
      success() {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
      },
      fail() {
        console.log('转发发布器调起失败');
      }
    }
  },
  onLoad: function () {
    var that = this;
    tt.login({
      success: (res) => {
        tt.request({
          url: 'https://tgadmin.clvtmcn.cn/api/login/jscode2session',
          method: 'post',
          data: {
            code: res.code,
            appid: 'tt410337bede3907f2'
          },
          success: (res) => {
            tt.getUserInfo({
              success(res) {
                console.log(res)
                that.setData({
                  user: res.userInfo,
                });
                tt.setStorageSync('userInfo', res.userInfo);
              },
              fail(res) {
                console.log(`getUserInfo 调用失败`, res);
              },
            });
          }
        });
      }
    })
  },
})
