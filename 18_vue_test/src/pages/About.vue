<template>
  <div id="about">
    <h3>About</h3>
  </div>

</template>

<script>
export default {
  name:'About',
  // 组件内的路由守卫 beforeRouteEnter和beforeRouteLeave
  // 痛过路由规则,进入该组件时调用
  beforeRouteEnter(to,from,next){
    console.log('通过路由规则进入组件',to,from)
    if(to.meta.isAuth){
      if(localStorage.getItem('name')==='kaylee1'){
        next()
      }else{
        alert('姓名错误')
      }
    }else{
      next()
    }
  },
  // 通过路由规则,离开该组件时调用
  beforeRouteLeave(to,from,next){
    console.log('通过路由规则离开组件')
    next()
  },
}
</script>

<style>
#about{
  margin-left: 20px;
}
</style>