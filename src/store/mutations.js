
// import {setStore, getStore} from '../config/mUtils'

export default {
	alertTips(state, tips) {
		state.tipShow = true;
		state.tips = tips;
	},
  
  settingUser(state,user){
    state.user=user;
  },
  setList(state,user){
    state.list=user;
  },
  closeError(state){
    state.tipShow = false;
		state.tips = '';

  }
}
