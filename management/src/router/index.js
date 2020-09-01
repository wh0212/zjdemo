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
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  }, {
    path: '/text',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../views/text.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
