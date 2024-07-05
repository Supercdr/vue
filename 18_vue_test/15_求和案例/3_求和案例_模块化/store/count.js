export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    }
  },
  state: {
    sum: 0,
    name: 'kaylee',
    age: 18,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}