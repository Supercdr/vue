//此文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
// 导入countAbout和personAbout模块
import personAbout from './person'
import countAbout from './count'

// 引入vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex)
// 创建store
export default new Vuex.Store({
  // 使用vuex模块化
  modules: {
    countAbout,
    personAbout
  }
})

