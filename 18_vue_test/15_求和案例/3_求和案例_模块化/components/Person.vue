<template>
  <div>
    <h3>count组件当前的数为：{{ sum }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="keyWord">
    <button @click="addPerson">添加</button>
    <button @click="addZhang(keyWord)">添加姓张的人</button>
    <button @click="addRandom">随机添加文案</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations, mapActions} from 'vuex'
import {nanoid} from 'nanoid'

export default {
  name:'Person',
  data(){
    return{
      keyWord:''
    }
  },
  computed:{
    ...mapState('countAbout',['sum']),
    ...mapState('personAbout',['personList']),
  },
  methods:{
    addPerson(){
      if(!this.keyWord){
        alert('请输入姓名')
        return
      }
      const personObj={id:nanoid(),name:this.keyWord}
      // 使用命名空间自己调用commit方法，需要加个命名空间的前缀
      this.$store.commit('personAbout/ADDPERSON',personObj)
      this.keyWord=''
    },
    // addRandom(){
    //   // 使用命名空间自己调用dispatch方法，需要加个命名空间的前缀
    //   // this.$store.dispatch('personAbout/addRandom')
    // },
    // 或者使用mapActions生成dispatch方法调用personAbout中的addRandom方法
    ...mapActions('personAbout',['addRandom','addZhang'])
  }
}
</script>

<style>

</style>