import Vue from 'vue'
import Router from 'vue-router'
import HelloVue2 from '@/components/HelloVue2'
import On from '@/components/on'
import model from '@/components/model'
import template from '@/components/template'
import computed from '@/components/computed'
import Class from '@/components/class'
import Style from '@/components/style'

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
    },
    {
      path: '/temp',
      name: 'template',
      component: template
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    }
  ]
})
