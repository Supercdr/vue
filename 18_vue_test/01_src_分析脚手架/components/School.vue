<template>
  <!-- 模板 -->
  <div>
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <hr>
    <student></student>
  </div>
</template>

<script>
    import student from './Student'
    // 数据和方法
   export default{
    name:'schoolInfo',
    data(){
      return {
        name:'浙江传媒学院',
        address:'杭州'
      }
    },
    components:{student}
   }
</script>
