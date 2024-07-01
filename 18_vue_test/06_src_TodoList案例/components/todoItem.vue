<template>
  <li>
    <label>
      <!-- 点击复选框修改todo中的done值，通过函数获取点击的todo的id，再修改对应id的done值 -->
      <input type="checkbox" :checked="todo.done" @change="changeCheck(todo.id)">
      
      <!-- 使用v-model也能实现todo.done的修改，但是不太推荐，因为违反了不能修改props数据的原则 -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      
      <!-- 从接受的参数对象中获取值 -->
      <span v-show="!todo.isEdit">{{todo.name}}</span>
      <input type="text" :value="todo.name" v-show="todo.isEdit" @blur="hideInput" @keyup.enter="hideInput" ref="nameInput">
    </label>
    <div id="btns">
      <button class="dtbtn" @click="btnEdit" v-show="!todo.isEdit">编辑</button>
      <button class="dtbtn" @click="btnDelete(todo.id)">删除</button>
    </div>
  </li>
</template>

<script>

export default {
  name:'todoItem',
  //接收参数
  props:['todo'],
  methods:{
    changeCheck(id){
      this.$bus.$emit('todoCheck',id)
    },
    btnDelete(id){
      if(confirm('确定删除这个任务吗？')){
        this.$bus.$emit('deleteTodo',id)
      }
    },
    btnEdit(){
      if(!this.todo.hasOwnProperty('isEdit')){
        this.$set(this.todo,'isEdit','true')
      }
      this.todo.isEdit=true
      // 对input的聚焦操作需要等到页面全部渲染之后才能执行，而此时的页面还未渲染，所以需要使用$nextTick方法设置聚焦方法在下一次页面渲染的时候执行
      this.$nextTick(function(){
        this.$refs.nameInput.focus()
      })      
    },
    hideInput(e){
      this.todo.isEdit=false
      if(!e.target.value.trim()){ 
        alert('输入不能为空')
        return
      }
      this.$bus.$emit('updateTodoName',this.todo.id,e.target.value)
    }
  }
}
</script>

<style scoped>
li{
  display: flex;
  justify-content: space-between;
  list-style:none;
  padding:10px;
  border:1px solid gray;
}
li:first-child{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
li:last-child{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
li label{
  display:flex;
  align-items: center;
}
input[type="checkbox"]{
  width:20px;
  height:18px;
  margin-right:15px;
}
.dtbtn{
  background-color: rgb(238, 218, 176);
  border: none;
  border-radius: 7px;
  padding:3px 10px;
  display:none;
  margin:0 5px;
}
li:hover{
  background-color:rgb(241, 239, 228);
}
li:hover button{
  display:block;
}
#btns{
  display:flex;
}
</style>