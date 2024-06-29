<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <hr>
    <h1 @click="showName">学生姓名：{{ name }}</h1>
    <h1 @click="showInfo">学生年龄：{{ age }}</h1>
  </div>
</template>

<script>
import {a,b} from '../mixin'
export default {
  name:'Student',
  data(){
    return{
      msg:'学生信息',
      name:'kaylee',
      age:19
    }
  },
  //混合minins必须要写成一个数组
  mixins:[a,b]
}
</script>

<style>
.student{
  background-color: azure;
}
</style>