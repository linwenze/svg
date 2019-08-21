<template>
  <div id="app">
    <!-- <div class="ico-view"></div> -->
     
   
     <div class="errorbg" v-if="tipShow">
       {{tips}}
       <button @click="closeError()">关闭弹出框</button>
      </div>
       <router-view/>
  </div>
</template>

<script>
import { mapMutations,mapActions,mapState } from "vuex";
export default {
  name: 'App',
  methods: {
    ...mapMutations(["closeError"]),
  },
   computed: {
    ...mapState(['tipShow','tips'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.errorbg{
  background: rgba(0,0,0,0.8);
  width:100%;height:100vh;
}
#app div{font-size:50px;color:red;}
</style>
