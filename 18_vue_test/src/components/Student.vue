<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <hr>
    <h1 @click="showName">学生姓名：{{ name }}</h1>
    <h1>学生年龄：{{ age }}</h1>
  </div>
</template>

<script>
import {a} from '../mixin'
export default {
  name:'Student',
  data(){
    return{
      msg:'学生信息',
      name:'kaylee',
      age:19
    }
  },
  mixins:[a]
}
</script>

<style>
.student{
  background-color: azure;
}
</style>