<template>
  <div class="hello">
    HOME页面
    <div class="ico-view"></div>
    <div class="ico-egg"></div>
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
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
  
  },
  computed: {
  },
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
