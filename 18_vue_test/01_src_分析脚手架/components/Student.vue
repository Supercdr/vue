<template>
  <div class="student">
    <h1>学生姓名：{{ name }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <button @click="add">点击增加年龄</button>
  </div>
</template>

<script>
  export default {
    name:'studentInfo',
    data(){
      return{
        name:'Milchstra',
        age:19
      }
    },
    methods:{
      add(){
        this.age++
      }
    }
  }
</script>

<style>
.student{
  background-color: beige;
}
</style>