<template>
  <div id="list">
    <h1 id="search" v-show="info.users.length"> Search Results:</h1>
    <div id="container">
      <div class="single">
        <!-- 欢迎页面 -->
        <h1 class="wel" v-show="info.isFirst">Welcome to Github Search</h1>
        <!-- 加载中 -->
        <h1 class="wel" v-show="info.isLoading">Loading...</h1>
        <!-- 用户列表 -->
        <a v-for="user in info.users" :key="user.login" :href="user.html_url">
          <img :src="user.avatar_url" alt="头像">
          <p>{{ user.login }}</p>
        </a>
        <!-- 查找错误 -->
        <h1 class="wel" v-text="info.errMsg"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'List',
  data(){
    return{
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg:'',
      }
    }
  },
  mounted(){
    this.$bus.$on('Users',(updateListData)=>{
      this.info={...this.info,...updateListData}
    })
  },
  beforeDestroy(){
    this.$bus.$off('Users')
  }
}
</script>

<style scoped>
#list{
  background-color: rgb(253, 244, 237);
  border-radius: 20px;
}
#search{
  margin:10px 20px;
}
#container{
  display:flex;
}
.wel{
  margin-left: -15px;
}
.single{
  margin-left:35px;
  display:flex;
  flex-wrap: wrap;
}
.single a{
  width:200px;
  text-decoration: none;
  text-align: center;
  color: black;
}
.single a img{
  width:100px;
}
</style>