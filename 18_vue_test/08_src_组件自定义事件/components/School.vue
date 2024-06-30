<template>
  <div class="school">
    <h1>学校信息</h1>
    <hr>
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="sendSchoolName">传递学校名称</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁School组件</button>
  </div>
</template>

<script>
export default{
  name:'School',
  data(){
    return {
      name:'浙江传媒学院',
      address:'杭州'
    }
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      // 通过调用从App父组件传递过来的函数返回参数
      // this.getSchoolName(this.name)
      // 调用$emit方法触发通过父组件给School组件实例绑定的自定义事件，并且传递参数a
      this.$emit('myThing',this.name)
    },
    unbind(){
      //解绑自定义事件 使用$off()方法
      // 若解绑多个自定义事件 this.$off(['thing1','thing2'])
      // 解绑所有自定义事件 this.$off()
      this.$off('myThing')
      console.log('自定义事件myThing已解绑')
    },
    death(){
      //销毁此Vue子组件实例
      console.log('School子组件已销毁')
      this.$destroy()
    }
  }
}
</script>

<style scoped>
.school{
  background-color: antiquewhite;
}
</style>