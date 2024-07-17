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