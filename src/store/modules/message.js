
export default  {
  state: {msg:'111'},
  mutations: {
    'message.setMsg':function(state,msg){
      state.msg=msg
   } 
 },
  actions: { 
    'message.setMsg':function({commit,dispatch}, msg){
      commit('message.setMsg',msg)
    }
  },
  getters: { 
    'message.msglen': state => {
      return state.msg.length;
    }
  }
}
