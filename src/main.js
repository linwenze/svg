// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './iconfont/fonts/font.css'
import './assets/css/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   store
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store
})
