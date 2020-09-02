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
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome', component: () => import('../views/Welcome.vue')
      },
      {
        path: '/users', component: () => import('../components/user/Users.vue')
      },
      {
        path: '/adsda', component: () => import('../views/adsda.vue')
      }
    ]
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

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数标识方形
  //  next()  放行     next('/login')  强制放行

  if (to.path === '/login') return next();
  //获取 token
  const tokenStr = window.sessionStorage.getItem('token');
  //tokenStr为空则跳转到登录
  if (!tokenStr) return next('/login');
  //tokenStr不为空则执行跳转
  next();
})


export default router
