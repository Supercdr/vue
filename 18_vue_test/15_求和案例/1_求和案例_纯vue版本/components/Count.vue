<template>
  <div id="count">
    <h1>当前的数：{{ sum }}</h1>
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
  export default {
    name:'Count',
    data(){
      return{
        sum:0,
        number:1,
      }
    },
    methods:{
      increment(){
        this.sum+=this.number
      },
      decrement(){
        this.sum-=this.number
      },
      incrementOdd(){
        if(this.sum%2!==0){
          this.sum+=this.number
        }
      },
      incrementWait(){
        setTimeout(()=>{
          this.sum+=this.number
        },500)
      },
    }
  }
</script>

<style>
  select,button{
    margin-left:10px;
  }
</style>