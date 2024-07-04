<template>
  <div id="container">
    <Count/>
  </div>
</template>

<script>
  import Count from './components/Count'

  export default {
    name:'App',
    components:{Count},
    
  }
</script>

<style>
  body{
    margin:0
  }
</style>
