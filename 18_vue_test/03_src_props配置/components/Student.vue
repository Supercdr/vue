<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <hr>
    <h1 >学生姓名：{{ name }}</h1>
    <h1>学生年龄：{{ myAge }}</h1>
    <button @click="updateAge">点击修改年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return{
      msg:'学生信息',
      myAge:this.age
    }
  },
  methods:{  
    updateAge(){
      this.myAge++
    },
  },
  //1.简单声明接收参数
  // props:['name','age']
  //2.接受的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number
  // },
  //3.接受的同时对数据进行：类型限制+默认值的指定+必要性的限制
  props:{
    name:{
      type:String,
      required:true //必填项
    },
    age:{
      type:Number,
      default:99 //默认值
    }
  }

}
</script>

<style>
.student{
  background-color: azure;
}
</style>