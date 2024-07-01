<template>
  <div id="container">
    <!-- 给todoHeader组件传递addTodo函数，该函数接受一个参数，通过此途径可以让todoHeader给App组件传递参数 -->
    <todoHeader @addTodo="addTodo"/>

    <!-- 给todoList组件传递todoList的数据 -->
    <todoList :todoList="todoList" />

    <todoFooter :todoList="todoList" 
    @checkAllTodo="checkAllTodo"
    @clearDoneTodo="clearDoneTodo"
    />
  </div>
</template>

<script>
  import todoHeader from './components/todoHeader'
  import todoList from './components/todoList'
  import todoFooter from './components/todoFooter'

  export default {
    name:'App',
    components:{todoHeader,todoList,todoFooter},
    data(){
      return{
        // 初始化todoList数据,首先从localStorage中读取数据,若没有,则显示空列表
        todoList:JSON.parse(localStorage.getItem('todos'))||[]
      }
    },
    methods:{
      // 添加todoObj对象
      addTodo(todoObj){
        //将接收到的todoObj对象添加到数组里
        this.todoList.unshift(todoObj)
      },
      //勾选或取消勾选改变done值
      todoCheck(id){
        // 通过接收从todoItem传递的的id值进行匹配，再修改对应id的done值
        this.todoList.forEach(todo=>{
          if(todo.id===id)
            todo.done=!todo.done
        })
      },
      //更新todoName
      updateTodoName(id,name){
        // 通过接收从todoItem传递的的id值进行匹配，再修改对应id的done值
        this.todoList.forEach(todo=>{
          if(todo.id===id)
            todo.name=name
        })
      },
      //删除todo
      deleteTodo(id){
        //使用filter方法遍历todoList数组，返回todo.id与获取的id不同的所有对象的新数组
        this.todoList = this.todoList.filter( todo => todo.id !== id )
      },
      //勾选or取消勾选
      checkAllTodo(done){
        this.todoList.forEach(todo => {
          todo.done=done
        });
      },
      //清除已完成的todo
      clearDoneTodo(){
        this.todoList=this.todoList.filter( todo => todo.done!= true)
      }
    },
    mounted(){
      this.$bus.$on('todoCheck',this.todoCheck)
      this.$bus.$on('deleteTodo',this.deleteTodo)
      this.$bus.$on('updateTodoName',this.updateTodoName)
    },
    beforeDestroy(){
      this.$bus.$off(['todoCheck','deleteTodo','updateTodoName'])
    },
    // 使用监视属性,若todoList数据变化,则将新的todoList数据存储到localStorage中
    watch:{
      todoList:{
        // 添加深度监视,Vue默认不监视对象中某个值的变化
        deep:true,
        handler(val){
          localStorage.setItem('todos',JSON.stringify(val))
        }
      }
    }
  }
</script>

<style>
  #container{
    display:flex;
    flex-direction: column;
    align-items:center;
  }
</style>
