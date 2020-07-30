import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    textStyle: {
      color: '#767aa1'
    },
    grid: {
      y: 10
    },
    xAxis: {
      type: 'category',
      data: ['20', '26', '27', '28', '29']
    },
    yAxis: {
      type: 'value',
      textStyle: {
        color: '#767aa1'
      },
      splitLine: {
        show: true,
        color: '#767aa1',
        lineStyle: {
          color: '#767aa1',
          type: 'dashed'
        }
      }
    },
    series: [{
      data: [0, 0, 10, 0, 0],
      type: 'line',
      areaStyle: {
        normal: {
          color: '#fff'
        }
      },
      itemStyle: {
        normal: {
          label: {
            color: '#fff',
            show: true
          }
        }
      }
    }, ]
  }

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    dataItem: {
      img: '../../image/Snipaste_2020-07-28_11-43-33.png',
      title: '超级变脸',
      type: '趣味',
      describe: "的房价的看法东风快递发电量咖啡加快递费的框架咖啡机快点进的开发开始懂了疯狂老爹康复科进度款放假的金风科技放假的时间开发螺丝刀咖啡机",
      maxearnings: 13,
      proportion: 16,
      children: [{
          img: '../../image/Snipaste_2020-07-28_11-43-33.png',
          title: '测你前世喝了多少孟婆汤',
          share: '分享标题：【超准测试】测你前世对对对'
        },
        {
          img: '../../image/Snipaste_2020-07-28_15-07-12.png',
          title: '测你吃辣指数有多高',
          share: '分享标题：【超准测试】测你吃辣指数对对对'
        }
      ]
    },
    ec: {
      onInit: initChart
    },
    time: ''
  },
  changeDate(v){
    this.setData({
      time:v.detail.value
    })
  },
  onLoad() {
    var date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    this.setData({
      time:`${year}-${month}-${day}`
    })
  },
  onReady() {
   
  }
});