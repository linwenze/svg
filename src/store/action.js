
export default {
  error({commit}, tips) {
	//   alert(tips)
    commit('alertTips', tips)
  },
  closeError({commit}){
	commit('closeError')
  },
  inquiry({commit,dispatch}, msg) {
		dispatch('ceshi2');
    commit('inquiry', msg)
  },
  setList({commit,dispatch}, list){
	//  list= list.filter(todo => todo.age>=18);
	 if(list && list.length>0){
		commit('setList',list)
	 }else{
		dispatch('error','列表不能为空！')
	 }
  }
}
