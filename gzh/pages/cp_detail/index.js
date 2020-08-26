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
    },]
  }
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    dataItem: {},
    ec: {
      onInit: initChart
    },
    time: '',
    model: false,
    ewmact:false
  },
  addpush(){

  },
  showBigImg(v) {
    wx.getImageInfo({
      src: v.currentTarget.dataset.img,
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          },
        })
      }
    })
  },
  ewmnone() {
    this.setData({
      ewmact: false
    })
  },
  nodemdel() {
    this.setData({
      model: false
    })
  },
  typept(v) {
    console.log(v.currentTarget.dataset.pt)
    this.setData({
      ewmact: true
    })
  },
  promotion() {
    this.setData({
      model: true
    })
  },
  changeDate(v) {
    this.setData({
      time: v.detail.value
    })
  },
  onLoad(v) {
    console.log(JSON.parse(v.data))
    var date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    this.setData({
      time: `${year}-${month}-${day}`,
      dataItem: JSON.parse(v.data)
    })
  }
});