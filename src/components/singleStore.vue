<template>
  <div>
    <div>
      
      <div>{{user.name}}</div>
    </div>
    <div style="border:1px solid #000">
      初始化显示结果{{$store.state.tips}}
      <table border='1'>
        <tr v-for="(i,index) in list" :key="index">
          <td>{{i.name}}</td>
           <td>车龄:{{i.age}}</td>
        </tr>
      </table>
    </div>
     <div style="border:1px solid #000;margin-top:30px;">
       doneTodos列表显示车龄大7年的
      <table border='1'>
        <tr v-for="(i,index) in doneTodos" :key="index">
          <td>{{i.name}}</td>
           <td>车龄:{{i.age}}</td>
        </tr>
      </table>
    </div>
    <button @click="setting()">设置个人信息</button>
      
      <button @click="emptyList()">空列表</button>
      <button @click="error('出错了')">显示报错</button>
      <button @click="activeDispath()">activeDispath显示报错</button>
      <button @click="commitEvent()">commitEvent显示报错</button>
    <div>
      <a href="/#/about">about</a>
    </div>
    <div>
      <a href="/#/message">message</a>
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
  </div>
</template>

<script>
import { mapMutations,mapActions,mapGetters,mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created(){
     let list = [
        { name: "奥迪a7", age: 2 },
        { name: "奥迪a5", age: 10 },
        { name: "奥迪a1", age: 6 }
      ];
      this.setList(list);
      // this.doneTodos()
   
  },
  methods: {
    ...mapMutations(["settingUser"]),
    ...mapActions(["setList",'error']),
    setting() {
      this.settingUser({ name: "张三" });
    },
  
    emptyList(){
       let list = [];
      this.setList(list);

    },
    activeDispath(){
      this.$store.dispatch('error','activeDispath-error')
    },
     commitEvent(){
      this.$store.commit('alertTips','commit-error')
    }
  },
  computed: {
    ...mapGetters(['doneTodos']),
    ...mapState(["user",'list','tipShow','tips'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
