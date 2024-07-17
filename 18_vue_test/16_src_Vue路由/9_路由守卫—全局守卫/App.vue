<template>
  <div id="container">
   <Banner/>
    <hr>
    <div class="guide">
      <router-link class="routerLink" to="/about" active-class="activeLink">About</router-link>
      <router-link class="routerLink" to="/home" active-class="activeLink">Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './pages/Home'
  import About from './pages/About'
  import Banner from './components/Banner'
  export default {
    name:'App',
    components:{Home,About,Banner},
    mounted(){

    }
  }
</script>

<style>
  body{
    margin:0;
    padding:20px;
  }
  .guide{
    display: flex;
  }
  .routerLink{
    text-decoration: none;
    color:black;
    padding:10px;
    border:1px solid black
  }
  .activeLink{
    background-color: rgb(243, 171, 82);
  }
</style>
