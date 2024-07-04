//此文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'

//准备actions————用于响应组件中的动作,一般数据的逻辑处理都在action中处理
const actions = {
  jia(context, value) {
    context.commit('JIA', value)
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    // console.log(context,value)
    if (context.state.sum % 2 !== 0) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  }
}
//准备mutations————用于响应组件中的动作 最终处理数据
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  }
}
//准备state————用于存储数据
const state = {
  sum: 0,
  name:'kaylee',
  age:18,
}
// 准备getters————用于将state中的数据进行加工
const getters = {
  // 接收state参数
  bigSum(state) {
    return state.sum * 10
  }
}
// 引入vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex)
// 创建store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

