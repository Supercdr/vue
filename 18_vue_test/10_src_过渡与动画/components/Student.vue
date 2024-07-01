<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <hr>
    <!-- transition标签只能给单个标签添加动画 -->
    <!-- 
    <transition name="tranAge">
      <h1 v-show="showAge">学生年龄：{{ age }}</h1>
    </transition> 
    -->
    <!-- transition-group可以给多个标签添加动画，但是每个标签都要添加key属性 -->
    <transition-group name="tranAge" appear>
      <h1 v-show="!showAge" key="1">学生姓名：{{ name }}</h1>
      <h1 v-show="showAge" key="2">学生年龄：{{ age }}</h1>
    </transition-group>
      
    <button @click="showAge=!showAge">显示姓名或年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return{
      msg:'学生信息',
      name:'Kaylee',
      age:18,
      showAge:true
    }
  },
}
</script>

<style>
.student{
  background-color: azure;
}
.tranAge-enter,.tranAge-leave-to{
  transform: translateX(-100%);
}
.tranAge-enter-to,.tranAge-leave{
  transform:translateX(0);
}
.tranAge-enter-active,.tranAge-leave-active{
  transition:0.5s ease;
}
</style>