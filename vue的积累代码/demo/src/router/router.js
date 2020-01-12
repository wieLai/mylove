import Vue from 'vue'
import VueRouter from 'vue-router'
import mohu from '@/pages/模糊查询.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      name: 'defalut',
      path: '/',
      redirect: { name: 'Mohu' }
    },
    {
      name: 'Mohu',
      path: '/mohu',
      component: mohu
    }
  ]
})
