Component({
  data: {
    list: [
      // {
      //   img: "../../image/banner.jpg",
      //   title: "你的财运在哪里",
      //   ftitle: "测试你的财运在哪里",
      //   count: '1.9w',
      //   id: 1
      // },
      {
        img: "../../image/xg2.jpg",
        title: "生活中你有几幅面孔",
        ftitle: "测试你的生活中有几幅面孔",
        count: '21w',
        id: 4
      },
      {
        img: "../../image/cai7.jpg",
        title: "你的偏财指数",
        ftitle: "测试你的偏财指数",
        count: '2.4w',
        id: 2
      },
      // {
      //   img: "../../image/zs4.jpg",
      //   title: "你的窝囊指数是多少",
      //   ftitle: "测试你的窝囊指数",
      //   count: '1.1w',
      //   id: 5
      // },
      {
        img: "../../image/cai2.jpg",
        title: "你的财富状况",
        ftitle: "测试你的财富状况",
        count: '21.1w',
        id: 3
      },
      {
        img: "../../image/lb.jpg",
        title: "怎样让老板欣赏你",
        ftitle: "测试怎么让老板欣赏你",
        count: '8.1w',
        id: 6
      },
      {
        img: "../../image/sy2.jpg",
        title: "同事对你的偏见有多大",
        ftitle: "测同事对你的偏见有多大",
        count: '18.11w',
        id: 7
      },
      {
        img: "../../image/timg (1).jpg",
        title: "你和暧昧对象最终结果如何",
        ftitle: "测你和暧昧对象最终结果如何",
        count: '11w',
        id: 8
      },
      {
        img: "../../image/live2.jpg",
        title: "你会因为什么原因脱单",
        ftitle: "测你因为什么原因脱单",
        count: '21w',
        id: 9
      },
      {
        img: "../../image/qw.jpg",
        title: "你适合生活在那个时代",
        ftitle: "测你适合生活在那个时代",
        count: '4w',
        id: 10
      },
      {
        img: "../../image/qw2.jpg",
        title: "你最适合穿什么样的婚纱",
        ftitle: "测你最适合穿什么样的婚纱",
        count: '55w',
        id: 11
      }
    ]
  },
  methods: {
    about(v) {
      var index = v.target.dataset.index;
      if (index == 1) {
        tt.reLaunch({
          url: '/pages/cai4index/index'
        });
      } else if (index == 2) {
        tt.reLaunch({
          url: '/pages/caiindex/index'
        });
      }else if (index == 3) {
        tt.reLaunch({
          url: '/pages/cai2index/index'
        });
      }else if (index ==4 ) {
        tt.reLaunch({
          url: '/pages/xgindex/index'
        });
      }else if (index ==5 ) {
        tt.reLaunch({
          url: '/pages/xg2index/index'
        });
      }else if (index ==6 ) {
        tt.reLaunch({
          url: '/pages/syindex/index'
        });
      }else if (index ==7 ) {
        tt.reLaunch({
          url: '/pages/sy2index/index'
        });
      }else if (index ==8 ) {
        tt.reLaunch({
          url: '/pages/liveindex/index'
        });
      }else if (index ==9 ) {
        tt.reLaunch({
          url: '/pages/live2index/index'
        });
      }else if (index ==10 ) {
        tt.reLaunch({
          url: '/pages/qwindex/index'
        });
      }else if (index ==11 ) {
        tt.reLaunch({
          url: '/pages/qw2index/index'
        });
      }
    },
  }
})