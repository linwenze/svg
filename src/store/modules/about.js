
export default  {
  state: {msg:''},
  mutations: {
    setMsg(state,msg){
      state.msg=msg
   } 
 },
  actions: { 
    setMsg({commit,dispatch}, msg){
      commit('setMsg',msg)
    }
  },
  getters: { 
    // doneTodos: state => {
    //   return state.msg.substr(0,4);
    // }
  }
}
