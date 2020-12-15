import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自定义全局样式
import './assets/css/global.css'
//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//axios 配置
import axios from 'axios'
import service from './utils/request'
//配置请求的根路径
// axios.defaults.baseURL = 'http://192.168.0.24:8085/';
// axios.defaults.baseURL = '/';
// axios.interceptors.request.use(config => {
//   console.log(window.sessionStorage.getItem('token'))

//   if(window.sessionStorage.getItem('token') == "undefined"){
//     console.log("2")
//     window.sessionStorage.setItem('token',null )
//   }

//   if (window.sessionStorage.getItem('token') != null){
//     console.log("1")
//     config.headers.Authorization = window.sessionStorage.getItem('token');
//   }else{
//     config.headers.Authorization = null;
//   }
  
//   //在最后必须 return config
//   return config;
// })
Vue.prototype.$http = service;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //决定初始页面
  render: h => h(App)
}).$mount('#app')
