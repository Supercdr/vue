<template>
  <div id="header">
    <h1 class="title">ToDoList</h1>
    <input class="addInput" type="text" placeholder="在这里创建你的任务" @keyup.enter="add">
  </div>
</template>

<script>
// 引入随机生成id的nanoid
import {nanoid} from 'nanoid'
export default {
  name:'todoHeader',
  methods:{
    add(e){
      //获取输入的值
      // console.log(e.target.value)
      
      //判断输入的值是否为空
      if(!e.target.value.trim()){
        alert('请输入你的任务');
        return
      }

      // 将输入的值包装成todoList数据对象
      const todoObj={id:nanoid(),name:e.target.value,done:false}

      //将todoObj对象通过addTodo方法传递给App组件
      this.$emit('addTodo',todoObj) 

      //清空输入框
      e.target.value=''
    }
  },
}
</script>

<style scoped>
#header{
  width:80%;
  display:flex;
  justify-content: center;
  flex-direction: column;
}
.title{
  text-align:center;
}
.addInput{
  /* margin:10px; */
  padding:12px 20px;
  font-size: 17px;
  border-radius:10px;
}
</style>