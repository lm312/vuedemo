import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lmtest from '@/components/lmtest'
import lmtest1 from '@/components/lmtest1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello1',
      name: 'HelloWorld1',
      component: lmtest
    },
    {
      path: '/lmtest1',
      name: 'lmtest1',
      component: lmtest1
    }
  ]
})
