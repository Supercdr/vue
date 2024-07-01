<template>
  <div id="list">
    <div class="unfinished" v-show="todoList.length">未完成{{unfinished}}</div>
    <ul>
      <!-- 引入第三方库的动画 -->
      <transition-group appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomIn"
      leave-active-class="animate__zoomOut">
        <todoItem v-for="todoObj in todoList" 
        :key="todoObj.id" 
        :todo="todoObj" />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import 'animate.css'
import todoItem from './todoItem'
export default {
  name:'todoList',
  components:{todoItem},
  // 接收从App组件传递过来的todoList
  props:['todoList'],
  computed:{
    unfinished(){
      //使用reduce方法计算todoList数组里未完成的总数
      return this.todoList.reduce((pre,todo)=> pre+(todo.done ? 0 : 1),0)
    }
  }
}
</script>

<style>
#list{
  width:80%;
  padding:20px;
}
ul{
  padding-inline-start: 0px;
}
.unfinished{
  font-size:22px;
  font-weight:bold;
}
</style>