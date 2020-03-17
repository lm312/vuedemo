<template>
  <div id="lmtest1">
 
   <h1>lmtest1</h1>
    <HelloWorld/>
     <lmtest/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import lmtest from './lmtest.vue'
export default {
  name: 'lmtest1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HelloWorld,
    lmtest
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
</style>
