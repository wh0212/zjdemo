import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    // 移动端首页
    path: '/mbhome',
    name: 'mbHome',
    component: ()=>import('../page/home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    // PC端首页
    path: '/pchome',
    name: 'pcHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/pclogin',
    name: 'login',
    component: Login
  },
  {
    path: '/mblogin',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../page/mblogin.vue'),
  },
  {
    path: '/pcabout',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mbabout',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../page/mbabout.vue')
  }, {
    path: '/pcflow',
    name: 'flow',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow.vue')
  }, {
    path: '/mbflow',
    name: 'flow',
    component: () => import(/* webpackChunkName: "about" */ '../page/mbflow.vue')
  },{
    path: '/pctext',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../views/text.vue')
  },
  {
    path: '/mbtext',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../page/mbtext.vue')
  },
  {
    path: '/pcsearch',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/search.vue')
  },
  {
    path: '/mbsearch',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../page/mbsearch.vue')
  },
  {
    path: '/pcshouyi',
    name: 'shouyi',
    component: () => import(/* webpackChunkName: "about" */ '../views/money.vue')
  },
  {
    path: '/mbshouyi',
    name: 'shouyi',
    component: () => import(/* webpackChunkName: "about" */ '../page/mbshouyi.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
