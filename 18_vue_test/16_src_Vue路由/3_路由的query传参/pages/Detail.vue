<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.query.id}}</li>
      <li>消息详情：{{ $route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Detail',
  mounted(){
    // console.log(this.$route)
  }
}
</script>

<style>

</style>