<template>
  <div id="category">
    <h1>{{ title }}</h1>
    <!-- 作用域插槽 传递数据-->
    <slot name="hello" :foods="foods" :games="games" :films="films">插槽的标签体：我是一些默认值，当使用者没有传递具体结构时，我就会出现</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
  data(){
    return{
      foods:['北京烤鸭','驴打滚','重庆火锅','水晶虾饺','肠粉'],
      games:['原神','王者荣耀','恋与深空','英雄联盟','崩坏'],
      films:['云边有个小卖部','肖申克的救赎','蜘蛛侠','盗梦空间','怦然心动']
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