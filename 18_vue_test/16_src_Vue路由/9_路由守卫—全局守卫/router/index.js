import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router = new VueRouter({
  routes:[
    {
      path:'/about',
      component:About,
      // meta属性用于在路由中添加程序员自定义的属性
      meta:{title:'about'}
    },
    {
      path:'/home',
      component:Home,
      meta:{title:'home'},
      children:[ //嵌套路由 路径前不用加"/"
        {
          name:'news',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'news'},
        },
        {
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'message'},
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
router.beforeEach((to,from,next)=>{
  console.log('@',to,from)
  if(to.meta.isAuth){
    if(localStorage.getItem('name')==='kaylee1'){
      next()
    }else{
      alert('姓名错误')
    }
  }else{
    next()
  }
})
router.afterEach((to,from)=>{
  document.title=to.meta.title || 'Vue Router'
})
export default router