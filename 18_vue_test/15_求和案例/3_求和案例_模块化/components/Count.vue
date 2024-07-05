<template>
  <div id="count">
    <h1>当前的数：{{ sum }}</h1>
    <h3>放大十倍后的数:{{ bigSum }}</h3>
    <h3>person组件的人数为:{{ personList.length }}</h3>
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
      // 从store中的countAbout模块中读取sum,name,age的数据
      ...mapState('countAbout',['sum','name','age']),
      ...mapState('personAbout',['personList']),
      ...mapGetters('countAbout',['bigSum']),
    },
    methods:{
      // 使用mapMutations生成$store.commit方法
      ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
      // 使用mapActions生成$store.dispatch方法
      ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

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