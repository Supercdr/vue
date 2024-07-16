<template>
  <div>
    <ul>
      <!-- 使用props接收路由参数 -->
      <li>消息编号：{{ id }}</li>
      <li>消息详情：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Detail',
  mounted(){
    console.log(this.$route)
  },
  props:["id","title"]
}
</script>

<style>

</style>