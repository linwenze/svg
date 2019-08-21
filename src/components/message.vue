<template>
 <div class="hello">
    MESSAGE页面
    <div>
      <a href="/#/about">about</a>
    </div>
   
    <div>
      <a href="/#/HelloWorld">HelloWorld</a>
    </div>
     <div>
      <a href="/#/singleStore">singleStore</a>
    </div>
     <div>
      <a href="/#/modulesStore">modulesStore</a>
    </div>
    <div>{{msg}}</div>
    <button @click="setMsg('334343434')">设置消息</button>
    <div>长度为{{msglen}}</div> 

     <div>长度为{{$store.state.message.msg}}</div> 
     </div>
</template>

<script>
import { mapMutations,mapActions,mapGetters,mapState } from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created(){
    // this.error('3343434')

  },
   methods: {
    ...mapActions(['error','message.setMsg']),
    ...mapActions({setMsg:'message.setMsg'}),
   },
  computed: {
    ...mapGetters(['message.msglen']),
    ...mapGetters({msglen:'message.msglen'}),
   ...mapState({
    msg: state=>state.message.msg,
    })
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
