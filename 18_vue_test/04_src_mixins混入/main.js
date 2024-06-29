import Vue from 'vue'
import App from './App.vue'
//引入全局混合
// import {a} from './mixin'

Vue.config.productionTip = false

//全局混合组件
// Vue.mixin(a)
// Vue.mixin(b)

new Vue({
  components:{App},
  render:h=>h(App)
}).$mount("#app")