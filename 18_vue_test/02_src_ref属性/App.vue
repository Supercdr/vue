<template>
  <div>
    <h1 id="hello">你好啊</h1>
    <h1 ref="wel">Welcome</h1>
    <School ref="sch"></School>
    <Student ref="stu"/>
    <button @click="showRef">点我输出DOM元素</button>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name:'App',
  components:{School,Student},
  methods:{
    showRef(){
      //JS原生操作 输出DOM元素
      console.log(document.getElementById('hello'))
      //输出VueComponent的ref属性
      console.log(this.$refs)
      console.log(this.$refs.wel)
      console.log(this.$refs.sch)
    }
  }
}
</script>
