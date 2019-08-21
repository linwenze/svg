import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import message from './modules/message'
import about from './modules/about'
Vue.use(Vuex)
const state = {
  tipShow:false,//是否提示报错
  tips:'454554',//报错提示文字
  user:{},//用户信息
  list:[]//车型列表
}
export default new Vuex.Store({ 
	state,
	getters,
	actions,
	mutations,
	modules:{
		message,
		about
	}
})
 