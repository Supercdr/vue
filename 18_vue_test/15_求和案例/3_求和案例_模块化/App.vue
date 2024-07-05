<template>
  <div id="container">
    <Count/>
    <br><hr><br>
    <Person/>
  </div>
</template>

<script>
  import Count from './components/Count'
  import Person from './components/Person'

  export default {
    name:'App',
    components:{Count,Person},
    mounted(){

    }
  }
</script>

<style>
  body{
    margin:0
  }
</style>
