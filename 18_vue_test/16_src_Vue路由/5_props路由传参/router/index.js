import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[ //嵌套路由 路径前不用加"/"
        {
          name:'news',
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              // 命名路由
              name:'xiangxi',
              // 使用占位符接收相应的params参数
              path:'detail/:id/:title',

              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传输给目标组件
              // props:{id:'000',title:'你好'},

              // props的第二种写法 值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以paops的形式传给目标组件
              // props:true,

              // props的第三种写法，值为函数，默认接收$route参数
              props(r){
                return{
                  id:r.params.id,
                  title:r.params.title
                }
              },
              component:Detail
            }
          ]
        }
      ]
    }
  ]
})