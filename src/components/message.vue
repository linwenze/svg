<template>
  <div id="app" style="font-size:20px">
    <div class="test">
       <vue-tree
      v-model="checkedIds"
      :tree-data="treeData"
      :options="options"
    />
    </div>
   <div @click="show">dfsfsdf</div>
  </div>
</template>

<script>
import Tree from './tree.json';
export default {
  name: 'app',
  data () {
    return {
      checkedIds: [],
      treeData: Tree.data,
      options: {
        someOption: true,
        checkbox:true,
        depthOpen:5,
        openIcon:'ico-view',
        checkedIcon:'ico-view',
        uncheckedIcon:'ico-uncheck',
        checkedIcon:'ico-checked',
        halfCheckedIcon:'ico-cancheck'
      }
    }
  },
  methods:{
    show(){
      console.log(this.checkedIds)
      console.log(this.options.checkedIds)
    }
  }
}
</script>