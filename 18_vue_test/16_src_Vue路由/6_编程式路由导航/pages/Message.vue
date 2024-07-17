<template>
 <div>
  <h3>Message</h3>
  <hr>
  <ul>
    <li v-for="m in messageList" :key="m.id">
      
      <!-- 跳转路由并携带params参数，to的字符串写法 -->
      <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>

      <!-- 跳转路由并携带params参数，to的对象写法(必须使用命名路由，不能使用path)-->
      <!-- <router-link :to="{
                      name:'xiangxi',
                      // path:'/home/message/detail',
                      params:{
                        id:m.id,
                        title:m.title
                      }
                    }">
        {{ m.title }}
      </router-link> -->
      <button @click="pushShow(m)">push查看</button>
      <button @click="replaceShow(m)">replace查看</button>
    </li>
  </ul>
  <router-view></router-view>
 </div>
</template>

<script>
export default {
  name:'Message',
  data(){
    return{
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
      ]
    }
  },
  methods:{
    pushShow(m){
      // 编程式路由导航 不使用<router-link>跳转路由
      // 使用push方法跳转路由
      this.$router.push({
        name:'xiangxi',
        params:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){
      // 使用replace方法跳转路由
      this.$router.replace({
        name:'xiangxi',
        params:{
          id:m.id,
          title:m.title
        }
      })
    }
  }
}
</script>

<style>

</style>