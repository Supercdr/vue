<template>
  <div id="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
  import List from './components/List'
  import Search from './components/Search'

  export default {
    name:'App',
    components:{List,Search},
  }
</script>

<style>
  body{
    margin:0
  }
</style>
