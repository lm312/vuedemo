<template>
  <div id="lmtest1">
   <App></App>
 
   <h1>lmtest1</h1>
      <App></App>
      <h3>  {{ title }}</h3>   
  </div>
</template>

<script>
export default {
  name: 'lmtest1',
   el: '#lmtest1',
  props: ['title']
}
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
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
