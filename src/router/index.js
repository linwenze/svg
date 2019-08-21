import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import about from '@/components/about'
// import message from '@/components/message'
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('@/components/home.vue')), 'chunkname1')
const about = r => require.ensure([], () => r(require('@/components/about.vue')), 'chunkname2')
const message = r => require.ensure([], () => r(require('@/components/message.vue')), 'chunkname3')
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld.vue')), 'chunkname3')
const singleStore = r => require.ensure([], () => r(require('@/components/singleStore.vue')), 'chunkname4')
const modulesStore = r => require.ensure([], () => r(require('@/components/modulesStore.vue')), 'chunkname3')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    
    {
      path: '/singleStore',
      name: 'singleStore',
      component: singleStore
    },
    {
      path: '/modulesStore',
      name: 'modulesStore',
      component: modulesStore
    },
    {
      path: '/modulesStore',
      name: 'modulesStore',
      component: modulesStore
    },
    
  ]
})
