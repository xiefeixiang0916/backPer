import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//测试页面
import about1 from './views/About.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //决定初始页面
  render: h => h(App)
}).$mount('#app')
