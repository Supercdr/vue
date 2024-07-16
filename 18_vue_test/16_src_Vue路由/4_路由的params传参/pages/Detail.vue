<template>
  <div>
    <ul>
      <!-- 使用params接收参数 -->
      <li>消息编号：{{ $route.params.id}}</li>
      <li>消息详情：{{ $route.params.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Detail',
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>