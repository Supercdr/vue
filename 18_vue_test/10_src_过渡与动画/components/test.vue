<template>
  <div class="test">
    <button @click="isShow=!isShow">引入动画</button>
    <!-- 使用第三方动画库 -->
    <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__zoomInLeft"
    leave-active-class="animate__zoomOut">
      <h1 v-show="isShow">引入animate第三方库动画</h1>
    </transition>
  </div>
</template>

<script>
// 引入第三方动画库animate.css
import 'animate.css'
export default {
  name:'test',
  data(){
    return{
      isShow:true
    }
  },
}
</script>

<style>
  .test{
    background-color: rgb(158, 209, 218);
    text-align: center;
  }
</style>