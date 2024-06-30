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
import pubsub from 'pubsub-js'
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
      // 发布消息,传递数据
      pubsub.publish('stuName',this.name)
    }
  },
  

}
</script>

<style>
.student{
  background-color: azure;
}
</style>