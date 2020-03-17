<template>
<div id="app2">
<my-component1></my-component1>
</div>
</template>
<script>
var app2 = new Vue({
el: '#app2',
components:{
'my-component1': {
template: '<div>这里是局部注册组件的内容</div>'
}
}
});
</script>