import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/flow',
    name: 'flow',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow.vue')
  }, {
    path: '/text',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../views/text.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/search.vue')
  },
  {
    path: '/shouyi',
    name: 'shouyi',
    component: () => import(/* webpackChunkName: "about" */ '../views/money.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
