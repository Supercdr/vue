import Vue from 'vue'
import App from './App.vue'
//引入全局混合
// import {a} from './mixin'
//引入插件
import plugins from './plugins'
Vue.config.productionTip = false

//全局混合组件
// Vue.mixin(a)
// Vue.mixin(b)

//使用插件 可以在后面传递参数
Vue.use(plugins,1,2,3)

new Vue({
  components:{App},
  render:h=>h(App)
}).$mount("#app")