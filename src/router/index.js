import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' //重定向到该链接
  },
  {
    path:'/login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children: [
      {
        path: '/adsda',
        name: 'adsda',
        component: () => import('../views/adsda.vue')
      }, {
        path: '/vbvcbv',
        name: 'vbvcbv',
        component: () => import('../views/vbvcbv.vue')
      }
    ],
  },

]

const router = new VueRouter({
  routes
})

export default router
