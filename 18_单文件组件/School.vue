<template>
  <!-- 模板 -->
  <div>
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
// 数据和方法
   export default{
    name:'School',
    data(){
      return {
        name:'浙江传媒学院',
        address:'杭州'
      }
    }
   }
</script>
