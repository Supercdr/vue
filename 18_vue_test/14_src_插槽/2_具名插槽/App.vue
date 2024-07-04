<template>
  <div id="container">
    <Category title="美食">
      <!-- 使用具名插槽 必须要使用template标签包裹需要插入的结构 slot属性值是插槽的名称 -->
      <template slot="hello">
        <img src="https://img1.baidu.com/it/u=1003716357,2617706145&fm=253&fmt=auto&app=120&f=JPEG?w=713&h=475" alt="">
      </template>
    </Category>
    <Category title="游戏">
      <template slot="hello">
        <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="电影">
      <template slot="hello">
        <img src="https://img1.baidu.com/it/u=1003716357,2617706145&fm=253&fmt=auto&app=120&f=JPEG?w=713&h=475">
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'

  export default {
    name:'App',
    components:{Category},
    data(){
      return{
        foods:['北京烤鸭','驴打滚','重庆火锅','水晶虾饺','肠粉'],
        games:['原神','王者荣耀','恋与深空','英雄联盟','崩坏'],
        films:['云边有个小卖部','肖申克的救赎','蜘蛛侠','盗梦空间','怦然心动']
      }
    }
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
