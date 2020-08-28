// comm/modelxz/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ewmact: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nodemdel() {
      this.setData({
        model: false
      })
    },
    typept(v) {
      this.triggerEvent('typept', { ewmact: true, pt: v.currentTarget.dataset.pt });
    },
  }
})
