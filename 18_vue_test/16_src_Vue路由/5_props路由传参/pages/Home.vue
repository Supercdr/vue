<template>
  <div id="home">
    <h3>Home</h3>
    <div class="guide">
      <router-link class="homeLink" :to="{name:'news'}" active-class="activeLink">news</router-link>
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