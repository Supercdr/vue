import Vue from 'vue'
import App from './App.vue'

// 引入vue-resource
import vueResource from 'vue-resource'

Vue.config.productionTip = false
//使用vue-resource
Vue.use(vueResource)

new Vue({
  components:{App},
  render:h=>h(App),
  // 在Vue实例创建时,数据代理还未开始时在Vue的原型prototype上添加全局事件总线$bus,即当前的Vue实例
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount("#app")