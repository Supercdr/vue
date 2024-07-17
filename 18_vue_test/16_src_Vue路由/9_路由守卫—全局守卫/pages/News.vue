<template>
  <div>
    <h3>News</h3>
    <hr>
    <ul>
      <li :style="{opacity}">hello</li>
      <li>news <input type="text"></li>
      <li>news <input type="text"></li>
      <li>news <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'News',
  data(){
    return{
      opacity:0
    }
  },
  // 新的两个生命周期钩子activated和deactivated
  // 路由组件所独有的两个钩子，用于捕获路由组件的激活状态
  activated(){
    this.timer=setInterval(() => {
      this.opacity+=0.05
      if(this.opacity>=1){
        this.opacity=0
      }
      console.log("2")
    }, 50);
    console.log('News路由组件被激活')
  },
  deactivated(){
    clearInterval(this.timer)
    console.log('News路由组件已失活')
  },

  beforeDestroy(){
    console.log('News组件即将被销毁')
  }
}
</script>
