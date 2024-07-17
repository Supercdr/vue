<template>
  <div id="home">
    <h3>Home</h3>
    <div class="guide">
      <!-- 使用replace设置当前浏览记录写入历史记录时覆盖上一条历史记录 -->
      <router-link replace class="homeLink" :to="{name:'news'}" active-class="activeLink">news</router-link>
      <!-- 浏览器历史记录写入方法默认为push，即不会替换之前的历史记录 -->
      <router-link class="homeLink" to="/home/message" active-class="activeLink">message</router-link>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name:'Home',
}
</script>

<style scoped>
#home{
  margin-left: 20px;
}
.guide{
  margin-left: 20px;
}
.homeLink{
    text-decoration: none;
    color:black;
    padding:10px;
    border:1px solid black
}
</style>