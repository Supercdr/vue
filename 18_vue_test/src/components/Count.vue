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
    <button @click="increment(number)">+</button>
    <button @click="decrement(number)">-</button>
    <button @click="incrementOdd(number)">当前求和为奇数再加</button>
    <button @click="incrementWait(number)">等一等再加</button>
 </div>
</template>

<script>
  // 导入mapState，mapGetter，mapMutation和mapActions
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name:'Count',
    data(){
      return{
        number:1,
      }
    },
    computed:{
      // 使用Vue的mapState,mapGetters方法从Store中获取数据
      ...mapState(['sum','name','age']),
      ...mapGetters(['bigSum']),
    },
    methods:{
      // increment(){
      //   this.$store.dispatch('jia',this.number)
      // },
      // decrement(){
      //   this.$store.dispatch('jian',this.number)
      // },
      // incrementOdd(){
      //   this.$store.dispatch('jiaOdd',this.number)
      // },
      // incrementWait(){
      //   this.$store.dispatch('jiaWait',this.number)
      // },
      ...mapActions({increment:'jia',decrement:'jian',incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
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