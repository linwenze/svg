// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './iconfont/fonts/font.css'
import './assets/css/index.css'
// import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import VueCropper from 'vue-cropper'
import picker from 'vue-zoe-picker'
import Vuetree from 'vue-simple-tree'
import tree from "vue-giant-tree";
Vue.use(Vuetree)
Vue.use(picker)
Vue.use(VueCropper)
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.component('tree', tree)

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
