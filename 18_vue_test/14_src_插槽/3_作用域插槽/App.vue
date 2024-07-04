<template>
  <div id="container">
    <Category title="美食">
      <template slot="hello" scope="{foods}">
        <ol>
          <li v-for="(item,index) in foods" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot="hello" scope="{games}">
        <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="电影">
      <!-- 作用域插槽 使用scope属性接收数据，传递过来的数据是一个对象，解构赋值获取需要的数据 -->
      <template slot="hello" scope="{films}">
        <h4 v-for="(item,index) in films" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'

  export default {
    name:'App',
    components:{Category},
    
  }
</script>

<style>
  body{
    margin:0
  }
  #container{
    display: flex;
    justify-content: space-around;
  }
</style>
