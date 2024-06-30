<template>
  <div class="school">
    <h1>学校信息</h1>
    <hr>
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <h1>学生姓名为:{{ studentName }}</h1>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default{
  name:'School',
  data(){
    return {
      name:'浙江传媒学院',
      address:'杭州',
      studentName:''
    }
  },
  mounted(){
    // 订阅消息,接收数据,回调函数必须写为箭头函数,此方法返回一个pid
    this.pid = pubsub.subscribe('stuName',(name,data)=>{
      // console.log(name,data)
      this.studentName=data
    })
  },
  beforeDestroy(){
    //根据pid取消订阅
    pubsub.unsubscribe(this.pid)
  }
}
</script>

<style scoped>
.school{
  background-color: antiquewhite;
}
</style>