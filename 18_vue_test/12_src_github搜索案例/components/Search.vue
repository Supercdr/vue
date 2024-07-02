<template>
  <div id="search">
    <h1>Search Github Users</h1>
    <input class="input" type="text" placeholder="Enter the name you search" v-model="keyword">
    <button class="input" @click="getUsers">search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data(){
    return{
      keyword:'',
    }
  },
  methods:{
    getUsers(){
        this.$bus.$emit('Users',{isFirst:false,isLoading:true,users:[],errMsg:''})
      //发送请求
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        response=>{
          this.$bus.$emit('Users',{isLoading:false,users:response.data.items,errMsg:''})
        },
        error=>{
          this.$bus.$emit('Users',{isLoading:false,users:[],errMsg:error.message})
        }
      )
    }
  }
}
</script>

<style scoped>
#search{
  background-color:  rgb(253, 244, 237);
  padding:20px;
  border-radius: 20px;
}
.input{
  padding:10px 5px;
  margin:5px;
  border-radius: 10px;
  font-size: 16px;
}
</style>