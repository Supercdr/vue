<template>
  <div>
    <h1 id="hello">你好啊</h1>
    <h1 ref="wel">Welcome</h1>
    <School ref="sch"></School>
    <!-- 这里age的值应该是数值，但我们用引号传入的是字符串形式，所以需要前面加个：将其内容转换为JS表达式 -->
    <Student ref="stu" name="tom" :age="20"/>
    <Student ref="stu" name="Milchstra" :age="19"/>
    <Student ref="stu" name="Json" :age="32"/>
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
