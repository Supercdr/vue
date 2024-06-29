<template>
  <div id="list">
    <div class="unfinished" v-show="todoList.length">未完成{{unfinished}}</div>
    <ul>
      <todoItem v-for="todoObj in todoList" 
      :key="todoObj.id" 
      :todo="todoObj" 
      :todoCheck="todoCheck"
      :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import todoItem from './todoItem'
export default {
  name:'todoList',
  components:{todoItem},
  // 接收从App组件传递过来的todoList
  props:['todoList','todoCheck','deleteTodo'],
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