<template>
  <send/>
</template>

<script>
  import send from './components/send'
  export default {
    name:'App',
    components:{send},
 
  }
</script>

<style>
  #container{
    display:flex;
    flex-direction: column;
    align-items:center;
  }
</style>
