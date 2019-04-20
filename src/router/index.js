import Vue from 'vue'
import Router from 'vue-router'
import HelloVue2 from '@/components/HelloVue2'
import On from '@/components/on'
import model from '@/components/model'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue2',
      component: HelloVue2
    },
    {
      path: '/on',
      name: 'On',
      component: On
    },
    {
      path: '/model',
      name: 'model',
      component: model
    }
  ]
})
