Component({
  data: {
    list:[
      {
        img:"../../image/1.jpg",
        title:"你是不是主动的人",
        ftitle:"测试你会不会主动",
        count:'1.9w',
        id:1
      },
      {
        img:"../../image/xg4.jpg",
        title:"看你是一个怎样的人",
        ftitle:"测试你是怎样的人",
        count:'12w',
        id:2
      },
      {
        img:"../../image/banner.jpg",
        title:"你近期的财运",
        ftitle:"测试你近期的财运",
        count:'1w',
        id:3
      },
      {
        img:"../../image/3.jpg",
        title:"看你还要单身多久",
        ftitle:"测试你还要单身多久",
        count:'6w',
        id:4
      },
      {
        img:"../../image/sy4.jpg",
        title:"看你有当老板的潜质吗",
        ftitle:"测试你能当老板吗",
        count:'12w',
        id:5
      }
    ]
  },
  methods: {
    about(v) {
      var index = v.target.dataset.index;
      if (index == 1) {
        tt.reLaunch({
          url: '/pages/xg3index/index'
        });
      } else if (index == 2) {
        tt.reLaunch({
          url: '/pages/xg4index/index'
        });
      }else if (index == 3) {
        tt.reLaunch({
          url: '/pages/xg2index/index'
        });
      }else if (index == 4) {
        tt.reLaunch({
          url: '/pages/xgindex/index'
        });
      }else if (index == 5) {
        tt.reLaunch({
          url: '/pages/xg5index/index'
        });
      }
    },
  }
})