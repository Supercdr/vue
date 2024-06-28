<template>
  <div class="school">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default{
  name:'School',
  data() {
    return {
      name:'浙江传媒学院',
      address:'杭州'
    }
  },
}
</script>

<style scoped>
.school{
  background-color: antiquewhite;
}
</style>