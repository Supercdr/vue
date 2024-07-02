<template>
  <div id="category">
    <h1>{{ title }}</h1>
   
    <!-- 放置一个插槽表示占位符，可以将组件标签内的东西放置在插槽中 -->
    <slot>插槽的标签体：我是一些默认值，当使用者没有传递具体结构时，我就会出现</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
  data(){
    return{

    }
  },
}
</script>

<style>
  #category{
    background-color: bisque;
    width:200px;
    height:400px;
    padding:2px 20px;
    margin:20px;
  }
  img{
    width:165px;
  }
</style>