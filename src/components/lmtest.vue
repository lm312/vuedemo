<template>
  <div id="lmtest" class="hello">
    <h1>{{ msg }}</h1>
     <h1>{{ num+1 }}</h1>
      <h1>{{ reverse }}</h1>
        <h1>{{ watch1 }}</h1>
           count: {{ $store.state.count }}
   <input v-show="show" value="vshow">
    <input v-if="show" value="v-if">
      <input v-model="msg">
      <ul >
          <li v-for="item in items" :key="item"> {{$index}}-{{item.msg}} </li>
      </ul>
      <button v-bind:disabled="isButtonDisabled">Button</button>
      <button v-on:click="greet">Greet</button>
         <blog-post title="My journey with Vue11"/>
  </div>
</template>

<script>
new Vue({ el: '#lmtest'
})
export default {
  name: 'lmtest',
  data () {
    return {
      msg: 'lmtestvue',
      show: true,
      items: [
        {msg: '1'},
        {msg: '2'}
      ],
      num: 2,
      watch1: 2,
      isButtonDisabled: true
    }
  },
  computed: {
    // 计算属性的 getter
    reverse: () => '1'
  },
  watch: {
    msg: function (val) {
      this.watch1 = val + '222'
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.msg)
  }, // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
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
