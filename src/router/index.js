import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SiderBar from '@/components/SiderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiderBar',
      component: SiderBar
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
