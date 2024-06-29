export const a={
  data(){
    return{
      //若传入的data数据与子组件的data重复，那么子组件的数据优先显示
      name:'hh'
    }
  },
  methods:{
    showName(){
      alert(this.name)
    }
  },
  //混合中和子组件中若都出现了生命周期钩子，那么两者的生命周期钩子都会被触发
  mounted(){
    console.log('mounted')
  }
}
export const b={
  methods:{
    showInfo(){
      alert('第二个混合')
    }
  }
}