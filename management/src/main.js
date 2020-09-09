import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2'
import { isWeiXin, isMobile } from './util/model.js'
Vue.config.productionTip = false;
Vue.use(VueClipboard)

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {

  var path = to.path
  if (isWeiXin() || isMobile()) {
    console.log("移动")
    if (path === '/') {
      next({ path: '/mbhome' })
    } else if (path.indexOf('/pc') !== -1) {
      path = path.replace('/pc', '/mb')
      next({ path: path })
    } else {
      next()
    }

  } else {

    console.log("pc")
    if (path === '/') {
      console.log(11)
      next({ path: '/pchome' })
    } else if (path.indexOf('/mb') !== -1) {
      console.log(22)
      path = path.replace('/mb', '/pc')
      next({ path: path })
    } else {
      console.log(33)
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
