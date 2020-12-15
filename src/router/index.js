import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
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
  { path: '/welcome', component: () => import('../components/Welcome.vue') }
  ,
  { path: '/menu', component: () => import('../components/menu/index.vue') }
  ,
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome', component: () => import('../components/Welcome.vue')
      },
      {
        path: '/users', component: () => import('../components/user/Users.vue')
      }
    ]
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
