import Vue from 'vue'
import Router from 'vue-router'
import HelloVue2 from '@/components/HelloVue2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue2',
      component: HelloVue2
    }
  ]
})
