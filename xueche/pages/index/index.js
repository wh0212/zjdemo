const app = getApp()

Page({
  data: {
    current:0,
    car:[
      {
        id:0,
        name:'小车'
      },
      {
        id:1,
        name:'大车'
      },
      {
        id:2,
        name:'客车'
      },
      {
        id:3,
        name:'摩托车'
      }
    ],
    cartabout:0
  },
  swipercha(v){
    console.log(v.currentTarget.dataset.index)
    this.setData({
      current:v.currentTarget.dataset.index
    })
  },
  swiperchange(v){
    console.log(v.detail.current);
    this.setData({
      current:v.detail.current
    })
  },
  onLoad: function () {
    
  },
  onShow(){
    this.setData({
      carabout:app.globalData.carabout
    })
  }
})
