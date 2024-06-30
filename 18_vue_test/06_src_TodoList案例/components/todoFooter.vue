<template>
  <div id="footer" v-show="total">
    <div class="finished">
      <!-- checkbox的v-model绑定的是其是否被选中的状态值 -->
      <input type="checkbox" v-model="isAll">
      <span>已完成{{doneTotal}}/全部{{ total }}</span>
    </div>
    <button class="delete" @click="clearDone">清除已完成</button>
  </div>
</template>

<script scoped>
export default {
  name:'todoFooter',
  props:['todoList'],
  computed:{
    total(){
      return this.todoList.length
    },
    doneTotal(){
      //使用reduce方法计算todoList数组里已完成的总数
      return this.todoList.reduce((pre,todo) => pre+(todo.done ? 1 : 0),0)
    },
    isAll:{
      get(){
        return this.doneTotal===this.total && this.total > 0;
      },
      set(val){
        //根据全选框是否被选中的true或false值传递给App
        this.$emit('checkAllTodo',val)
      }
    }
  },
  methods:{
    clearDone(){
      if(confirm('确认删除已完成吗？')){
        this.$emit('clearDoneTodo')
      }
    }
  }
}
</script>

<style>
#footer{
  display:flex;
  justify-content: space-between;
  width:80%;
  padding:0 20px;
}
.finished{
  font-size:22px;
  font-weight:bold;
}
.delete{
  background-color: rgb(238, 218, 176);
  border: none;
  border-radius: 7px;
  padding:3px 10px;
}
input[type="checkbox"]{
  width:20px;
  height:18px;
  margin-right:15px;
}
</style>