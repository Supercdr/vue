<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <hr>
    <h1 >学生姓名：{{ name }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <button @click="sendStudentName">点击传递学生名称</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return{
      msg:'学生信息',
      name:'Kaylee',
      age:18
    }
  },
  methods:{  
    sendStudentName(){
      this.$emit('myThing',this.name,1,2,3,4)
    }
  },
  

}
</script>

<style>
.student{
  background-color: azure;
}
</style>