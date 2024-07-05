import axios from 'axios'
import { nanoid } from 'nanoid'
export default{
  namespaced: true,
  actions: {
    addRandom(context) {
      axios.get('https://v1.hitokoto.cn/?c=f&encode=text').then(
        response => {
          context.commit('ADDPERSON', { id: nanoid(),name:response.data})
        },
        error => {
          alert(error.message)
        }
      )
    },
    addZhang(context,value){
      if(value.indexOf('张')===0){
        context.commit('ADDPERSON',{id:nanoid(),name:value})
      }else{
        alert('添加的人必须姓张')
      }
    }
  },
  mutations: {
    ADDPERSON(state, person) {
      state.personList.unshift(person)
    }
  },
  state: {
    personList: [
      { id: '001', name: 'kaylee' },
      { id: '002', name: 'milchstra' },
    ]
  },
  getters: {

  }
}