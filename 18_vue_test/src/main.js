import Vue from 'vue'
import App from './App.vue'

// import {a} from './mixin'

Vue.config.productionTip = false

//全局混合组件
// Vue.mixin(a)

new Vue({
  components:{App},
  render:h=>h(App)
}).$mount("#app")