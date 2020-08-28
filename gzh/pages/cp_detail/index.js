
import Request from "../../utils/request";
Page({
  data: {
    dataItem: {},
    time: '',
    model: false,
    ewmact: false,
    page: 1,
    id: 0,
    name:""
  },
  addpush() {
    var that = this;
    this.setData({
      page: this.data.page += 1
    })
    Request({
      url: "api/small/pagearticle",
      method: "get",
      data: {
        page: that.data.page,
        class_id: that.data.id,
        name:that.data.name
      }
    }).then((res) => {
      if(res.data.data.length==0){
        console.log("mei")
      }
      that.setData({
        'dataItem.children': [...that.data.dataItem.children, ...res.data.data]
      })
    })
  },
  typept(v) {
    this.setData({
      ewmact: v.detail.ewmact
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
    this.setData({
      id: v.id,
      name:v.name == undefined ? '' : v.name
    })
    var that = this;
    Request({
      url: "api/small/lists",
      method: "get",
      data: {
        class_id: v.id,
        name: v.name == undefined ? '' : v.name
      }
    }).then((res) => {
      console.log(res)
      this.setData({
        dataItem: res.data[0]
      })
    })
    var date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    this.setData({
      time: `${year}-${month}-${day}`
    })
  }
});