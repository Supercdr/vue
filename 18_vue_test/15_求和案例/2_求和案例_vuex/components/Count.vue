<template>
  <div id="count">
    <h1>当前的数：{{ sum }}</h1>
    <h3>放大十倍后的数:{{ bigSum }}</h3>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
 </div>
</template>

<script>
  // 导入mapState和mapGetter
  import {mapState,mapGetters} from 'vuex'
  export default {
    name:'Count',
    data(){
      return{
        number:1,
      }
    },
    computed:{
      // 使用$store.state方法获取参数
      // sum(){
      //   return this.$store.state.sum
      // },
      // name(){
      //   return this.$store.state.name
      // },
      // age(){
      //   return this.$store.state.age
      // },
      // bigSum(){
      //   return this.$store.getters.bigSum
      // },
      // 借助mapState中生成计算属性，从state中读取数据（对象写法）
      // ...mapState({he:'sum',xingming:'name',nianling:'age'}),

      // 使用Vue的mapState方法从Store的state中获取数据（数组写法）
      ...mapState(['sum','name','age']),

      // 借助mapGetters生成计算属性，从Store的getters中读取数据（对象写法）
      // ...mapGetters({bigSum:'bigSum'})
      // 借助mapGetters生成计算属性(数组写法)
      ...mapGetters(['bigSum'])
    },
    methods:{
      increment(){
        this.$store.dispatch('jia',this.number)
      },
      decrement(){
        this.$store.dispatch('jian',this.number)
      },
      incrementOdd(){
        this.$store.dispatch('jiaOdd',this.number)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.number)
      },
    },
    mounted(){
      console.log(this.$store)
    }
  }
</script>

<style>
  select,button{
    margin-left:10px;
  }
</style>