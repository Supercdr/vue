<template>
  <div class="school">
    <h1 @click="showName">学校名称：{{ name }}</h1>
    <h1 @click="showInfo">学校地址：{{ address }}</h1>
  </div>
</template>

<script>
//局部混合
import {a,b} from '../mixin'
export default{
  name:'School',
  data() {
    return {
      name:'浙江传媒学院',
      address:'杭州'
    }
  },
  mixins:[a,b]
}
</script>

<style scoped>
.school{
  background-color: antiquewhite;
}
</style>