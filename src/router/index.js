import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mapA from '@/components/MAP/mapA'
import mainA from '@/components/HomeA/mainA'
import test from '@/components/test'

Vue.use(Router)

const router = new Router({
  routes: [
      {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      },
      {
          path: '/mapA',
          name: 'mapA',
          component: mapA
      },
      {
          path: '/home',
          name: 'Home',
          component: mainA,
          children:[
              {path: '/map', name: 'map', component: mapA},
              {path: '/test', name: 'test', component: test, title: 'test'}
              ]
      },

  ]
})
export default router
