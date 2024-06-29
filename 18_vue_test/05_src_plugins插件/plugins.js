export default{
  install(Vue,x,y,z){
    console.log('plugins',x,y,z)
    //全局的自定义指令
    Vue.directive('fbind', {
      //指令与元素成功绑定时被调用（一上来）
      bind(element,binding){
        element.value=binding.value
      },
      //指令所绑定的DOM元素被插入在页面时被调用
      inserted(element,binding){
        element.focus()
      },
      //指令所在的模板被重新解析时被调用
      update(element,binding){
        element.value=binding.value
      }
    })
    //全局过滤器
    Vue.filter('sliceTime',function(value){
      return value.slice(0,7)
    })
  }
}