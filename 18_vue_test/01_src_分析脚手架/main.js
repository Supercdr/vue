// 项目的入口文件
// 关于不同版本的Vue：
// 1.vue.js与vue.runtime.xxx.js的区别：
//  （1）vue.js是完整版的Vue，包含：核心功能+模板解析器
//  （2）vue.runtime.xxx.js是运行版的Vue。只包含：核心功能，没有模板解析器
// 2.因为vue.runtime.xxx.js没有模板解析器，所以不能在main.js中使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
//引入Vue(运行版Vue)
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vue实例对象（vm）
new Vue({
  // render渲染函数由Vue调用 接收一个CreateElement函数 完整形式如下：
  //render((createElement)=>{
  //    return createElement('h1','你好')
  // }) 下面为简写形式
  render: h => h(App),
}).$mount('#app')
//将Vue实例绑定在id为app的容器上
