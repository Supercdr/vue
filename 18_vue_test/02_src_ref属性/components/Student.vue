<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h1>学生年龄：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return{
      msg:'学生姓名：Kaylee',
      age:20
    }
  }
}
</script>

<style>
.student{
  background-color: azure;
}
</style>