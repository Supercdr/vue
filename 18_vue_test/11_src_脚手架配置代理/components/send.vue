<template>
  <div id="list">
    <button @click="send">点击发送跨域请求</button> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'send',
  methods:{
    send(){
      // 使用axios方法发送请求，首先向代理服务器发送请求，若代理服务器上没有该资源，则代理服务器向跨域端口发送请求
      // axios.get('http://localhost:8080/login').then(
      //   response=>{
      //     // 返回的数据为response.data
      //     console.log('请求成功',response.data)
      //   },
      //   error=>{
      //     console.log('请求失败',error.message)
      //   }
      // )
      //如果需要使用代理服务器跨域发送请求，需要在端口后面加上设置的前缀
      axios.get('http://localhost:8080/hello/login').then(
        response=>{
          // 返回的数据为response.data
          console.log('请求成功',response.data)
        },
        error=>{
          console.log('请求失败',error.message)
        }
      )
    }
  }
}
</script>

<style>

</style>