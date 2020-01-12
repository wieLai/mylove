import Vue from 'vue'
import App from './App.vue'
// 引入全局样式
import '@/styles/reset.less'
import router from '@/router/router.js'

// 如果use了，那么就会在Vue原型上挂载vant所有组件成员,通过$进行访问
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
