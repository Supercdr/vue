<template>
  <div>
    <!-- 通过父组件给子组件传递函数类型的props 实现子组件给父组件传递数据 -->
    <!-- <School :getSchoolName="getSchoolName"/> -->

    <!-- 通过v-on给子组件School绑定自定义事件myThing，子组件通过$emit方法触发自定义事件 -->
    <!-- v-on:可简写为@ -->
    <!-- <School v-on:myThing="getSchoolName"/> -->

    <!-- 通过给子组件实例绑定ref属性，再调用$ref获取并且调用$on方法给子组件绑定自定义事件，然后子组件通过$emit方法触发自定义事件（这种方式更加灵活） -->
    <School ref="school"/>
    <!-- 子组件的原生js事件需要添加修饰符native -->
    <Student ref="student" @click.native="show"/>
    <h1>学生姓名为:{{ studentName }}</h1>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name:'App',
  components:{School,Student},
  data(){
    return{
      studentName:'',
    }
  },
  methods:{
    getSchoolName(val){
      console.log('App收到了学校名称:' ,val)
    },
    // ...params用于将接收到的其他参数都存放在params数组中
    // getStudentName(val,...params){
    //   console.log('App收到了学生姓名',val,params)
    //   this.studentName=val
    // },
    show(){
      alert('子组件的原生js事件需要添加修饰符native')
    }
  },
  mounted(){
    // 调用$ref获取并且调用$on方法给子组件绑定自定义事件
    this.$refs.school.$on('myThing',this.getSchoolName)
    // 使用$once设置自定义事件只触发一次
    this.$refs.student.$once('myThing',
        (val,...params)=>{
          console.log('App收到了学生姓名',val,params)
          console.log(this)
          this.studentName=val
        })
  }
}
</script>

<style>

</style>