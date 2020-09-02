import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自定义全局样式
import './assets/css/global.css'
//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'https://api.apiopen.top/';
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token');
  //在最后必须 return config
  return config;
})
Vue.prototype.$http = axios;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //决定初始页面
  render: h => h(App)
}).$mount('#app')
