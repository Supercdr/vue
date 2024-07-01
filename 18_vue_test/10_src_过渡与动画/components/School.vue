<template>
  <div class="school">
    <h1>学校信息</h1>
    <hr>
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="showName=!showName">显示/隐藏</button>
    <!-- vue的动画标签，包裹在内的标签与-enter-active等类名进行绑定 -->
    <transition name="showStu" appear>
      <Student v-show="showName"/>
    </transition>
  </div>
</template>

<script>
import Student from './Student'
export default{
  name:'School',
  data(){
    return {
      name:'浙江传媒学院',
      address:'杭州',
      showName:true
    }
  },
  components:{Student},
}
</script>

<style scoped>
.school{
  background-color: antiquewhite;
}
/* Vue的进入动画 格式：.transition标签的name-enter-active */
.showStu-enter-active{
  animation: hello 0.5s linear;
}
/* Vue的离开动画 格式：.transition标签的name-leave-active */
.showStu-leave-active{
  /* reverse表示反转动画 */
  animation: hello 0.5s linear reverse;
}
@keyframes hello{
  from{
    transform:translateX(-100%);
  }to{
    transform:translateX(0);
  }
}
</style>