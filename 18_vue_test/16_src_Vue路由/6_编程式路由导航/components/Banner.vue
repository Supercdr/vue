<template>
   <div>
    <h1>Vue Router Demo</h1>
    <button @click="back()">上一步</button>
    <button @click="forward()">下一步</button>
    <button @click="go()">go</button>
   </div>
</template>

<script>
export default {
  name:'Banner',
  methods:{
    
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back()
    },
    go(){
      // 前进两步
      this.$router.go(2)
      // 后退两步
      // this.$router.go(2)
    }
  }
}
</script>
